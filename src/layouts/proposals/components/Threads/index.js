import React from 'react';
import { Card, Typography, TextField, Button, Divider, Box } from '@mui/material';
import MDButton from "components/MDButton";
import Thread from "examples/Lists/ThreadsList"

class ThreadComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
    };
  }

  handleMessageChange = (event) => {
    this.setState({ newMessage: event.target.value });
  };

  handleSendMessage = () => {
    const { newMessage, messages } = this.state;
    if (newMessage.trim() !== '') {
      const updatedMessages = [...messages, newMessage];
      this.setState({ messages: updatedMessages, newMessage: '' });
    }
  };

  render() {
    const { messages, newMessage } = this.state;
    const renderthread = messages.map((message, index) => (
        <Thread
            userName="abcd"
            description={message}
            value={index}
            />
    ));
    return (
      <Card>
        <Box p={2}>
          <Typography variant="h5">Commands</Typography>
          <Divider />
          <Box mt={2} mb={2}>
            {/* Render existing messages */}
            {renderthread}
          </Box>
          {/* Input field for new message */}
          <TextField
            label="New Message"
            variant="outlined"
            fullWidth
            value={newMessage}
            onChange={this.handleMessageChange}
            multiline
            rows={3}
          />
          {/* Button to send new message */}
        <Box mt={1}>
            <MDButton color="dark" onClick={this.handleSendMessage}>"post"</MDButton>   
        </Box>
        </Box>
      </Card>
    );
  }
}

export default ThreadComponent;
