import React, { useState, useEffect } from "react";
import MenuNavBar from "../Menu/MenuNavBar";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Typography, Avatar } from "@mui/material";
import bin from "../../assets/Conversations/bin.png";
import { useNavigate } from "react-router-dom";


const fetchData = async () => {
  try {
    const url = `https://medihacks-ka2dwt1hz-marikas-projects-22112c00.vercel.app/conversations/${userId}`
    console.log(url);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    }); // Replace with your actual API endpoint
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Handle errors gracefully, e.g., return empty array or display an error message
  }
};


export default function ConversationsList() {
  const [items, setItems] = useState([]); // State to store fetched items
  const [selectedItem, setSelectedItem] = useState(null);
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [accessToken, setAccessToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setItems(fetchedData.map((item) => ({
        title: `${item.category} ${item.type === 'QAndA' ? 'Q&A' : 'simulation'}`,  // Combine category and type as title
        date: item.metadata.createdAtT.slice(0,10),  // Extract date from metadata dateTime
        type: item.type,
        category: item.category,
        transcript: item.transcript,  
        _id: item._id
      })));
    };

    getData();
  }, []);

  const navigate = useNavigate();

  const handleItemClick = (item) => {
    console.log('selected item');
    //navigate(`/conversation/${item._id}`, { state: { item } });
    navigate(`/conversation`, { state: { item } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-[#F8F9FF]">
    <MenuNavBar />
    <main className="flex flex-col items-start justify-start">
  <h1 className="mt-8 mb-4 text-center text-xl font-bold" style={{ color: '#333333' }}>
    All my Conversations
  </h1>

  {items.length > 0 ? (
    <div className="grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-screen-lg">
      {items.map((item, index) => (
        <Grid key={index} className="flex justify-center bg-white rounded-md p-3">
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleItemClick(item)}
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent', // Remove hover effect
                },
              }}
            >
              <div className="flex flex-col">
                {/* Wrap in container to display title on top */}
                <ListItemText
                  primary={item.title}
                  className="font-bold"
                  primaryTypographyProps={{ fontFamily: 'Poppins, sans-serif' }} // Apply Poppins font
                >
                  {item.title || null}
                </ListItemText>
                <ListItemText
                  primary={item.date}
                  className="text-[#333333]"
                  primaryTypographyProps={{ fontFamily: 'Poppins, sans-serif' }} // Apply Poppins font
                >
                  {item.date || null}
                </ListItemText>
              </div>
              <ListItemIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline-block w-5 h-5"
                >
                  {/* Your SVG icon */}
                </svg>
              </ListItemIcon>
              <Avatar className="mb-4">
                <img
                  src={bin}
                  alt="Q&A Icon"
                  className="p-[5px] bg-white"
                />
              </Avatar>
            </ListItemButton>
          </ListItem>
        </Grid>
      ))}
    </div>
  ) : (
    <div className="text-center mt-10">
      <Typography variant="body1" component="p">
        Once you complete a simulation or Q&A conversation, a full transcript will be listed here.
      </Typography>
    </div>
  )}
</main>

    </div>
  );
}

