import { ActiveConversation } from 'context/ConversationContext';
import { useContext, useState } from 'react';

const ConversationInput = ({ divRef }) => {
  const { activeConversation } = useContext(ActiveConversation);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await activeConversation.sendMessage(message); //Numero de mensajes
      setMessage('');
      divRef.current.scrollTo(0, divRef.current.scrollHeight);
    }
  };

  const handleChange = (e) => {
    activeConversation.typing();
    setMessage(e.target.value);
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 text-black border-2 border-gray-700"
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí"
        />
      </form>
    </div>
  );
};

export default ConversationInput;
