//import * as React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from "react";
import MenuNavBar from "../Menu/MenuNavBar";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { Typography, Avatar } from "@mui/material";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrash } from '@fortawesome/free-solid-svg-icons';
import bin from "../../assets/Conversations/bin.png";


const testData = [
  { title: 'This is a bold title 1', date: '2024-07-12' },
  { title: 'Another Bold Title 2', date: '2024-07-11' },
  { title: 'Yet Another Bold Title 3', date: '2024-07-10' },
  { title: 'This is a bold title 4', date: '2024-07-12' },
  { title: 'Another Bold Title 5', date: '2024-07-11' },
  { title: 'Yet Another Bold Title 6', date: '2024-07-10' },
];


export default function ConversationsList() {
  const [items, setItems] = useState([]); // State to store fetched items

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/your-api-endpoint'); // Replace with your API call
      const data = await response.json();
      setItems(data);
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only on component mount

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
    <MenuNavBar />
    <main className="flex flex-col items-start justify-start">
    <Typography variant="h5" component="h1" className="mt-8 mb-4">
          My Conversations
        </Typography>
        <div className="grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-screen-lg">
     
        {testData.map((item, index) => (
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
      
    
    </main>
    </div>
  );
}

