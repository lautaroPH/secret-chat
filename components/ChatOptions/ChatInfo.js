import FriendlyName from 'components/ChatOptions/FriendlyName';
import ParticipantsNumber from 'components/ChatOptions/ParticipantsNumber';
import { ActiveConversation } from 'context/ConversationContext';
import useUser from 'hooks/useUser';
import { useContext, useState } from 'react';
import AddUserForm from './AddUserForm';
import ButtonAddUser from './ButtonAddUser';
import DeleteLeaveChat from './DeleteLeaveChat';
import ParticipantsList from './ParticipantsList';

const ChatInfo = ({ setOpenModal }) => {
  const [openInput, setOpenInput] = useState(false);
  const { activeConversation } = useContext(ActiveConversation);
  const user = useUser();

  const createdBy = activeConversation?.createdBy;
  const username = user?.user_metadata?.user_name;

  return (
    <>
      <FriendlyName
        setOpenModal={setOpenModal}
        username={username}
        createdBy={createdBy}
      />
      <div>
        <ParticipantsNumber />
        {username === createdBy && (
          <ButtonAddUser setOpenInput={setOpenInput} openInput={openInput} />
        )}
        {openInput && (
          <AddUserForm
            setOpenInput={setOpenInput}
            setOpenModal={setOpenModal}
          />
        )}
        <ParticipantsList
          username={username}
          createdBy={createdBy}
          setOpenModal={setOpenModal}
        />
      </div>
      <div className="pt-5">
        <DeleteLeaveChat
          username={username}
          createdBy={createdBy}
          chatName={activeConversation.friendlyName}
        />
      </div>
    </>
  );
};

export default ChatInfo;
