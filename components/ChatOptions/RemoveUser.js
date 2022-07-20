import useConversation from 'hooks/useConversation';
import { swalRemoveUser } from 'Swals/SwalRemoveUser';
import Swal from 'sweetalert2';

const RemoveUser = ({ identity, setOpenModal }) => {
  const { removeUser } = useConversation();

  const handleRemoveUser = () => {
    Swal.fire(swalRemoveUser(identity)).then((result) => {
      if (result.isConfirmed) {
        removeUser(identity, setOpenModal);
      }
    });
  };
  return (
    <button
      onClick={handleRemoveUser}
      className="text-sm tracking-widest text-red-500"
    >
      Remove
    </button>
  );
};

export default RemoveUser;
