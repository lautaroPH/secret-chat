import useConversation from 'hooks/useConversation';
import { useState } from 'react';
import { swalEnterName } from 'Swals/SwalEnterName';
import Swal from 'sweetalert2';

const ButtonAddUser = ({ setOpenModal }) => {
  const { addUser } = useConversation();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addUser(name, setOpenModal);
    } else if (!name.trim()) {
      Swal.fire(swalEnterName);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between mb-5"
    >
      <input
        type="text"
        placeholder="Enter a username"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="w-full py-1 pl-4 text-lg bg-transparent border border-gray-500 rounded-full focus:outline-none"
        autoFocus={true}
      />
      <button type="submit" className="ml-3 tracking-wider">
        Add
      </button>
    </form>
  );
};

export default ButtonAddUser;
