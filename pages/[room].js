import { ActiveConversation } from 'context/ConversationContext';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
// import Conversation from 'components/Room/Conversation';
// import ConversationInput from 'components/Room/ConversationInput';

export default function Room() {
  const { activeConversation } = useContext(ActiveConversation);
  const router = useRouter();

  useEffect(() => {
    if (!activeConversation?.uniqueName) {
      router.push('/');
    }
  }, [activeConversation, router]);

  return (
    <div>
      {activeConversation?.uniqueName && (
        <div className="relative max-w-6xl py-2 mx-auto">
          {/* <h2 className="text-3xl">{activeConversation.uniqueName}</h2>
          <Conversation />
          <ConversationInput /> */}
        </div>
      )}
    </div>
  );
}
