import { ActiveConversation } from 'context/ConversationContext';
import '../styles/globals.css';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [activeConversation, setActiveConversation] = useState('');

  return (
    <ActiveConversation.Provider
      value={{ activeConversation, setActiveConversation }}
    >
      <Component {...pageProps} />
    </ActiveConversation.Provider>
  );
}

export default MyApp;
