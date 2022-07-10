import { useState } from 'react';
import { ACTIONS_CHAT } from 'utils/actionsChat';
import { VALUES_CHAT_SECTION } from 'utils/valuesChatSection';
import ButtonOpenFormChat from './ButtonOpenFormChat';
import Form from './Form';

const JoinChat = ({ setButtonActive, buttonActive }) => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="text-center">
      <ButtonOpenFormChat
        title={VALUES_CHAT_SECTION.joinChat}
        setOpenForm={setOpenForm}
        openForm={openForm}
        setButtonActive={setButtonActive}
        buttonActive={buttonActive}
      />
      {openForm && (
        <Form
          title={VALUES_CHAT_SECTION.enterChatName}
          buttonTitle={VALUES_CHAT_SECTION.buttonActionJoin}
          action={ACTIONS_CHAT.JOIN_CHAT}
          setOpenForm={setOpenForm}
          setButtonActive={setButtonActive}
        />
      )}
    </div>
  );
};

export default JoinChat;
