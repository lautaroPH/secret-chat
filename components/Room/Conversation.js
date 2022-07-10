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
      });
  }, [activeConversation]);

  useEffect(() => {
    return () =>
      activeConversation.on('messageAdded', (message) => {
        setMessages((originMessages) => [...originMessages, message]);
      });
  }, [activeConversation]);

  // after
  // afterUpdate(() => {
  // 	window.scrollTo(0, div.scrollHeight);
  // });

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
