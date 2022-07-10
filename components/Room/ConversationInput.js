import { ActiveConversation } from 'context/ConversationContext';
import { useContext, useState } from 'react';

const ConversationInput = () => {
  const { activeConversation } = useContext(ActiveConversation);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const div = document.getElementById('div-conversation');
    if (message) {
      await activeConversation.sendMessage(message); //Numero de mensajes
      setMessage('');
      window.scrollTo(0, div.scrollHeight);
    }
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 text-black border-2 border-gray-700"
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Escribe tu mensaje aquí"
        />
      </form>
    </div>
  );
};

export default ConversationInput;
