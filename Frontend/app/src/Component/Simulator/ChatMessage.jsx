import React from 'react';
import { Paper, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const ChatMessage = ({ message, isUser }) => {
  return (
    <div
      className={`flex items-center ${isUser ? 'justify-end' : 'justify-start'} my-2 w-full max-w-4xl`}
    >
      {!isUser && <PersonIcon className="mr-2 text-[#009379]" />}
      <Paper
        elevation={3}
        className={`p-4 rounded-lg ml-2 text-md shadow-md flex w-full gap-14 mb-4 ${isUser ? 'bg-[#E4ECEA]' : 'bg-[#FFF]'} max-w-4xl`}
      >
        <Typography
          style={{
            color: isUser ? '#0d47a1' : '#00796b',
          }}
          fullWidth
        >
          {message.comment}
        </Typography>
      </Paper>
      {isUser && <PersonIcon className="ml-2 text-[#333333]" />}
    </div>
  );
};

export default ChatMessage;
