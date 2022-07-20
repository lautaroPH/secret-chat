import { ActiveConversation } from 'context/ConversationContext';
import { useContext, useState } from 'react';
import FriendlyNameForm from './FriendlyNameForm';
import PencilEditSvg from './PencilEditSvg';

const FriendlyName = ({ username, createdBy }) => {
  const { activeConversation } = useContext(ActiveConversation);
  const [openEditInput, setOpenEditInput] = useState(false);
  const [friendlyName, setFriendlyName] = useState(
    activeConversation?.friendlyName,
  );

  const handleOpenForm = () => {
    setOpenEditInput(true);
  };

  return (
    <div className="flex pb-5">
      {openEditInput ? (
        <FriendlyNameForm
          friendlyName={friendlyName}
          setFriendlyName={setFriendlyName}
          setOpenEditInput={setOpenEditInput}
        />
      ) : (
        <>
          <h2 className="mr-3 text-2xl">{friendlyName}</h2>
          {username === createdBy && (
            <button onClick={handleOpenForm}>
              <PencilEditSvg />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default FriendlyName;
