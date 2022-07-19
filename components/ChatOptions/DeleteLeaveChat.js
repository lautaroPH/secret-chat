import useConversation from 'hooks/useConversation';
import { useRouter } from 'next/router';
import { swalLeaveDeleteChatButton } from 'Swals/SwalLeaveDeleteChatButton';
import Swal from 'sweetalert2';

const DeleteLeaveChat = ({ username, createdBy, chatName }) => {
  const { deleteChat, leaveChat } = useConversation();
  const router = useRouter();

  const handleDeleteLeaveChat = () => {
    Swal.fire(swalLeaveDeleteChatButton(username, createdBy, chatName)).then(
      (result) => {
        if (result.isConfirmed) {
          if (username === createdBy) {
            deleteChat();
            router.push('/');
          } else {
            leaveChat();
            router.push('/');
          }
        }
      },
    );
  };
  return (
    <button onClick={handleDeleteLeaveChat} className="text-red-500">
      {username === createdBy ? 'Delete chat' : 'Leave chat'}
    </button>
  );
};

export default DeleteLeaveChat;
