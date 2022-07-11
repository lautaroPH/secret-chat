import { ActiveConversation } from 'context/ConversationContext';
import { useContext, useEffect, useState } from 'react';
import Message from './Message';

const Conversation = () => {
  const { activeConversation } = useContext(ActiveConversation);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    return () =>
      activeConversation.getMessages().then((paginator) => {
        setMessages(paginator.items);
        console.log(paginator);
      });
  }, [activeConversation]);

  useEffect(() => {
    return () =>
      activeConversation.on('messageAdded', (message) => {
        console.log(message);
        setMessages((originMessages) => [...originMessages, message]);
      });
  }, [activeConversation]);

  console.log(messages);
  console.log(activeConversation);
  return (
    <div>
      {messages.map((message, index) => (
        <Message
          key={index + message.body}
          body={message.body}
          author={message.author}
        />
      ))}
    </div>
  );
};

export default Conversation;
