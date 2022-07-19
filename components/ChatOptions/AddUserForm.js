import useConversation from 'hooks/useConversation';
import { useState } from 'react';

const AddUserForm = ({ setOpenInput, setOpenModal }) => {
  const [inputValue, setInputValue] = useState('');
  const { addUser } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addUser(inputValue, setOpenModal);
      setInputValue('');
      setOpenInput(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-black"
        placeholder="Person name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default AddUserForm;
