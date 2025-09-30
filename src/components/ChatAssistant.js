import React, { useState } from 'react';
import { Fab, Box, Paper, Typography, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

function ChatAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <Paper
          elevation={6}
          sx={{
            position: 'fixed',
            bottom: 90,
            right: 24,
            width: 300,
            height: 400,
            p: 2,
            zIndex: 1300,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Assistant</Typography>
            <IconButton size="small" onClick={() => setOpen(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, mt: 2, overflowY: 'auto' }}>
            <Typography variant="body2" color="text.secondary">
              Hi! I’m your assistant. How can I help you today?
            </Typography>
          </Box>
          <Box component="form" onSubmit={(e) => e.preventDefault()} sx={{ display: 'flex', gap: 1, mt: 2 }}>
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ flex: 1, padding: '8px 12px', borderRadius: 4, border: '1px solid #ccc' }}
            />
            <button
              type="submit"
              style={{ padding: '8px 12px', background: '#1976d2', color: 'white', border: 'none', borderRadius: 4 }}
            >
              Send
            </button>
          </Box>
        </Paper>
      )}

      <Box sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1300 }}>
        <Fab color="primary" aria-label="chat" onClick={() => setOpen(true)}>
          <ChatIcon />
        </Fab>
      </Box>
    </>
  );
}

export default ChatAssistant;