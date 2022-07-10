import { ActiveConversation } from 'context/ConversationContext';
import { useContext, useEffect, useState } from 'react';

const ConversationInput = () => {
  const { activeConversation } = useContext(ActiveConversation);
  const [message, setMessage] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      activeConversation.sendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="mt-5">
      <input
        className="w-full p-2 text-black border-2 border-gray-700"
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Escribe tu mensaje aquí"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default ConversationInput;
