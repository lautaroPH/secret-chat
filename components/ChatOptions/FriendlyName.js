import { ActiveConversation } from 'context/ConversationContext';
import useConversation from 'hooks/useConversation';
import { useContext } from 'react';
import { swalEditFriendlyName } from 'Swals/SwalEditFriendlyName';
import { swalEnterName } from 'Swals/SwalEnterName';
import Swal from 'sweetalert2';
import PencilEditSvg from './PencilEditSvg';

const FriendlyName = ({ setOpenModal, username, createdBy }) => {
  const { activeConversation } = useContext(ActiveConversation);

  const { editFriendlyName } = useConversation();

  const handleEditFriendlyName = () => {
    Swal.fire(swalEditFriendlyName(activeConversation.friendlyName)).then(
      (result) => {
        if (result.isConfirmed && result.value.trim()) {
          editFriendlyName(result.value, setOpenModal);
        } else if (result.isConfirmed && !result.value.trim()) {
          Swal.fire(swalEnterName);
        }
      },
    );
  };
  return (
    <div>
      <h2>{activeConversation?.friendlyName}</h2>
      {username === createdBy && (
        <button onClick={handleEditFriendlyName}>
          <PencilEditSvg />
        </button>
      )}
    </div>
  );
};

export default FriendlyName;
