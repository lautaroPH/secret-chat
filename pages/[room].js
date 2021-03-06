import { ActiveConversation } from 'context/ConversationContext';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import Conversation from 'components/Room/Conversation';
import ConversationInput from 'components/Room/ConversationInput';
import useSession from 'hooks/useSession';
import { getAccessToken } from 'utils/getAccessToken';
import { joinConversation } from 'utils/joinConversation';
import useUser from 'hooks/useUser';
import ModalChatOptions from 'components/Modal/ModalChatOptions';
import Swal from 'sweetalert2';
import { swalErrors } from 'Swals/SwalErrors';
import RoomHead from 'components/Room/RoomHead';
import Head from 'next/head';

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
              Swal.fire(swalErrors(`${err.message} accessRoom`));
              router.push('/');
            });
        })
        .catch((err) => {
          Swal.fire(swalErrors(`${err.message} accessRoom`));
          router.push('/');
        });
    }
  }, [activeConversation, room, setActiveConversation, session, router]);

  useEffect(() => {
    if (session == null) {
      router.push('/');
    }
  }, [session, router]);

  return (
    <div className="h-screen mx-auto">
      <Head>
        <title>{activeConversation.friendlyName}</title>
        <meta
          name="description"
          content={`${activeConversation.friendlyName} chat`}
        />
      </Head>
      {activeConversation?.uniqueName && (
        <div className="h-screen">
          <RoomHead
            setOpenChatOptionsModal={setOpenChatOptionsModal}
            friendlyName={activeConversation.friendlyName}
          />
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
