import FriendlyName from 'components/ChatOptions/FriendlyName';
import ParticipantsNumber from 'components/ChatOptions/ParticipantsNumber';
import { ActiveConversation } from 'context/ConversationContext';
import useUser from 'hooks/useUser';
import { useContext } from 'react';
import ButtonAddUser from './ButtonAddUser';
import DeleteLeaveChat from './DeleteLeaveChat';
import ParticipantsList from './ParticipantsList';

const ChatInfo = ({ setOpenModal }) => {
  const { activeConversation } = useContext(ActiveConversation);
  const user = useUser();

  const createdBy = activeConversation?.createdBy;
  const username = user?.user_metadata?.user_name;

  return (
    <>
      <FriendlyName username={username} createdBy={createdBy} />
      <div>
        {username === createdBy && (
          <ButtonAddUser setOpenModal={setOpenModal} />
        )}
        <ParticipantsNumber />
        <ParticipantsList
          username={username}
          createdBy={createdBy}
          setOpenModal={setOpenModal}
        />
      </div>
      <div className="pt-5 text-center">
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
