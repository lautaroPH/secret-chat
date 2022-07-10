import { ActiveConversation } from 'context/ConversationContext';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Conversation from 'components/Room/Conversation';
import ConversationInput from 'components/Room/ConversationInput';
import useSession from 'hooks/useSession';
import { getAccessToken } from 'utils/getAccessToken';
import { joinConversation } from 'utils/joinConversation';
import { errorsMessages } from 'utils/errorsMessages';
import { addUserToChat } from 'utils/addUserToChat';

export default function Room() {
  const { activeConversation, setActiveConversation } =
    useContext(ActiveConversation);
  const router = useRouter();
  const session = useSession();
  const room = router.query.room;

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
    <div>
      {activeConversation?.uniqueName && (
        <div id="div-conversation" className="relative max-w-6xl py-2 mx-auto">
          <h2 className="text-3xl">{activeConversation.uniqueName}</h2>
          <button onClick={handleClick}>Add user</button>
          <Conversation />
          <ConversationInput />
        </div>
      )}
    </div>
  );
}
