import { ActiveConversation } from 'context/ConversationContext';
import { useContext, useState } from 'react';
import PaperAirplaneSvg from './PaperAirplaneSvg';

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
    <div className="px-2 mt-1">
      <form
        className="flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full px-4 py-2 text-black border-2 border-gray-700 rounded-full focus:outline-none"
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Message"
        />
        <button
          type="submit"
          className="flex items-center justify-center p-2 ml-2 text-white bg-green-800 rounded-full"
        >
          <PaperAirplaneSvg />
        </button>
      </form>
    </div>
  );
};

export default ConversationInput;
