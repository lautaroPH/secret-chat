import { ActiveConversation } from 'context/ConversationContext';
import { useContext, useState } from 'react';
import { swalDeleteConversation } from 'Swals/SwalDeleteConversation';
import { swalEditedFriendlyName } from 'Swals/SwalEditedFriendlyName';
import { swalErrors } from 'Swals/SwalErrors';
import { swalLeaveChat } from 'Swals/SwalLeaveChat';
import { swalUserAdded } from 'Swals/SwalUserAdded';
import { swalUserRemoved } from 'Swals/SwalUserRemoved';
import Swal from 'sweetalert2';
import useUser from './useUser';

const useConversation = () => {
  const { activeConversation } = useContext(ActiveConversation);
  const [messages, setMessages] = useState(null);
  const [newMessageNumber, setNewMessageNumber] = useState(0);
  const [prevPage, setPrevPage] = useState(null);
  const [participantsCount, setparticipantsCount] = useState(0);

  const user = useUser();

  const getMessages = () => {
    if (!messages) {
      activeConversation.getMessages().then((paginator) => {
        setMessages(paginator.items.reverse());
        setPrevPage(paginator.hasPrevPage ? paginator.prevPage : null);
      });
    }
  };

  const getMessageAdded = () => {
    if (messages && user) {
      activeConversation.on('messageAdded', (message) => {
        if (message.author !== user.user_metadata.user_name) {
          setNewMessageNumber(newMessageNumber + 1);
        }
        setMessages([message, ...messages]);
      });
    }
  };

  const resetsNumberMessages = () => {
    setNewMessageNumber(0);
  };

  const fetchPrevPage = () => {
    prevPage.then((paginator) => {
      setMessages([...messages, ...paginator.items.reverse()]);
      setPrevPage(paginator.hasPrevPage ? paginator.prevPage : null);
    });
  };

  const participantJoin = () => {
    if (messages) {
      activeConversation.on('participantJoined', (participant) => {
        setMessages([
          {
            identity: participant.identity,
            type: 'participantJoined',
          },
          ...messages,
        ]);
      });
    }
  };

  const participantLeft = () => {
    if (messages) {
      activeConversation.on('participantLeft', (participant) => {
        setMessages([
          {
            identity: participant.identity,
            type: 'participantLeft',
          },
          ...messages,
        ]);
      });
    }
  };

  const getParticipantsCount = () => {
    activeConversation.getParticipantsCount().then(setparticipantsCount);
  };

  const deleteChat = () => {
    activeConversation.delete().then((conversation) => {
      Swal.fire(swalDeleteConversation(conversation.friendlyName));
    });
  };

  const leaveChat = () => {
    activeConversation.leave().then((conversation) => {
      Swal.fire(swalLeaveChat(conversation.friendlyName));
    });
  };

  const addUser = (identity, closeModal) => {
    activeConversation
      .add(identity)
      .then((data) => {
        Swal.fire(swalUserAdded(data.identity));
        closeModal(false);
      })
      .catch((err) => {
        Swal.fire(swalErrors(`${err.message} addUser`));
      });
  };

  const removeUser = (identity, closeModal) => {
    activeConversation
      .removeParticipant(identity)
      .then(() => {
        Swal.fire(swalUserRemoved(identity));
        closeModal(false);
      })
      .catch((err) => {
        Swal.fire(swalErrors(`${err.message} removeUser`));
      });
  };

  const editFriendlyName = (friendlyName, closeModal) => {
    activeConversation
      .updateFriendlyName(friendlyName)
      .then(() => {
        Swal.fire(swalEditedFriendlyName);
        closeModal(false);
      })
      .catch((err) => {
        Swal.fire(swalErrors(`${err.message} editFriendlyName`));
      });
  };

  return {
    messages,
    fetchPrevPage,
    prevPage,
    participantsCount,
    getMessages,
    getMessageAdded,
    participantJoin,
    participantLeft,
    getParticipantsCount,
    newMessageNumber,
    resetsNumberMessages,
    deleteChat,
    leaveChat,
    addUser,
    removeUser,
    editFriendlyName,
  };
};

export default useConversation;
