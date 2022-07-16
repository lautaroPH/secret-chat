import { ActiveConversation } from 'context/ConversationContext';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import Conversation from 'components/Room/Conversation';
import ConversationInput from 'components/Room/ConversationInput';
import useSession from 'hooks/useSession';
import { getAccessToken } from 'utils/getAccessToken';
import { joinConversation } from 'utils/joinConversation';
import { errorsMessages } from 'utils/errorsMessages';
import { addUserToChat } from 'utils/addUserToChat';
import useUser from 'hooks/useUser';
import ThreePointsSvg from 'components/ThreePointsSvg';
import ModalChatOptions from 'components/Modal/ModalChatOptions';

export default function Room() {
  const { activeConversation, setActiveConversation } =
    useContext(ActiveConversation);
  const router = useRouter();
  const [openChatOptionsModal, setOpenChatOptionsModal] = useState(false);
  const session = useSession();
  const room = router.query.room;
  const user = useUser();

  const divRef = useRef();

  useEffect(() => {
    if (!activeConversation && session && room) {
      getAccessToken({ token: session.access_token })
        .then((accessToken) => {
          joinConversation({
            room,
            accessToken,
          })
            .then(setActiveConversation)
            .catch((err) => {
              // setLoading(false);
              alert(errorsMessages(err.message));
              router.push('/');
            });
        })
        .catch((err) => {
          // setLoading(false);
          alert(errorsMessages(err.message));
          router.push('/');
        });
    }
  }, [activeConversation, room, setActiveConversation, session, router]);

  useEffect(() => {
    if (session == null) {
      router.push('/');
    }
  }, [session, router]);

  const handleClick = () => {
    getAccessToken({ token: session.access_token })
      .then((accessToken) => {
        addUserToChat(activeConversation, accessToken, 'bravesaturn')
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        alert(errorsMessages(err.message));
        router.push('/');
      });
  };

  return (
    <div className="h-screen mx-auto">
      {activeConversation?.uniqueName && (
        <div className="h-screen">
          <div className="flex p-3 items-center justify-between bg-black bg-opacity-50">
            <h2 className="text-3xl text-left">Chat de rena</h2>
            <button onClick={() => setOpenChatOptionsModal(true)}>
              <ThreePointsSvg />
            </button>
          </div>
          <Conversation divRef={divRef} user={user} />
          <ConversationInput divRef={divRef} />
          {openChatOptionsModal && (
            <ModalChatOptions
              openModal={openChatOptionsModal}
              setOpenModal={setOpenChatOptionsModal}
            />
          )}
        </div>
      )}
    </div>
  );
}
