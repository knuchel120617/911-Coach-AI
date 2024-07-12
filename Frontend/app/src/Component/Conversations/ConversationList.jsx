import React, { useState, useEffect } from "react";
import MenuNavBar from "../Menu/MenuNavBar";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Typography, Avatar } from "@mui/material";
import bin from "../../assets/Conversations/bin.png";


const testData = [
  { title: 'This is a bold title 1', date: '2024-07-12' },
  { title: 'Another Bold Title 2', date: '2024-07-11' },
  { title: 'Yet Another Bold Title 3', date: '2024-07-10' },
  { title: 'This is a bold title 4', date: '2024-07-12' },
  { title: 'Another Bold Title 5', date: '2024-07-11' },
  { title: 'Yet Another Bold Title 6', date: '2024-07-10' },
];

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/conversations/testId'); // Replace with your actual API endpoint
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

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setItems(fetchedData.map((item) => ({
        title: `${item.category} ${item.type === 'QAndA' ? 'Q&A' : 'simulation'}`,  // Combine category and type as title
        date: item.metadata.createdAtT.slice(0,10),  // Extract date from metadata dateTime
      })));
    };

    getData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
    <MenuNavBar />
    <main className="flex flex-col items-start justify-start">
    <Typography variant="h5" component="h1" className="mt-8 mb-4">
          My Conversations
        </Typography>

        {items.length > 0? (
        <div className="grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-screen-lg">
     
        {items.map((item, index) => (
          <Grid key={index} className="flex justify-center bg-white rounded-md"> {/* Use Tailwind class for alignment */}
            <ListItem disablePadding>
              <ListItemButton>
              <div className="flex flex-col"> {/*wrap in container to display title on top */}
                <ListItemText primary={item.title} className="font-bold">
                  {item.title || null}
                  </ListItemText>  {/* Handle items without icons */}
                <ListItemText primary={item.date} className="text-gray-500" >
                  {item.date || null}
                  </ListItemText>
                  </div>
                <ListItemIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block w-5 h-5">
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

