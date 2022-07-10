import { useState } from 'react';
import { ACTIONS_CHAT } from 'utils/actionsChat';
import { VALUES_CHAT_SECTION } from 'utils/valuesChatSection';
import ButtonOpenFormChat from './ButtonOpenFormChat';
import Form from './Form';

const StartChat = ({ setButtonActive, buttonActive }) => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="text-center">
      <ButtonOpenFormChat
        title={VALUES_CHAT_SECTION.startChat}
        setOpenForm={setOpenForm}
        setButtonActive={setButtonActive}
        buttonActive={buttonActive}
      />
      {openForm && (
        <Form
          title={VALUES_CHAT_SECTION.enterChatName}
          buttonTitle={VALUES_CHAT_SECTION.buttonActionStart}
          action={ACTIONS_CHAT.CREATE_CHAT}
          setOpenForm={setOpenForm}
          setButtonActive={setButtonActive}
        />
      )}
    </div>
  );
};

export default StartChat;
