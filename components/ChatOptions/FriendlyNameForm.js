import useConversation from 'hooks/useConversation';
import { swalEnterName } from 'Swals/SwalEnterName';
import Swal from 'sweetalert2';

const FriendlyNameForm = ({
  setOpenEditInput,
  friendlyName,
  setFriendlyName,
}) => {
  const { editFriendlyName } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (friendlyName.trim()) {
      editFriendlyName(friendlyName, setOpenEditInput);
    } else if (!friendlyName.trim()) {
      Swal.fire(swalEnterName);
    }
  };

  return (
    <form className="flex items-center justify-between" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new name"
        onChange={(e) => setFriendlyName(e.target.value)}
        value={friendlyName}
        className="w-full py-1 pl-4 mr-3 text-2xl bg-transparent border border-gray-500 rounded-full focus:outline-none"
        autoFocus={true}
      />
      <button type="submit" className="tracking-wider">
        Save
      </button>
    </form>
  );
};

export default FriendlyNameForm;
