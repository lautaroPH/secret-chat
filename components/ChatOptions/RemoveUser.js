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
      className="text-xs tracking-widest text-red-600 border border-red-600 p-[3px]"
    >
      Delete
    </button>
  );
};

export default RemoveUser;
