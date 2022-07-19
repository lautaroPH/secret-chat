import useConversation from 'hooks/useConversation';
import useNearScreen from 'hooks/useNearScreen';
import { useEffect, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ButtonBottom from './ButtonBottom';
import Message from './Message';
import TypingMessage from './TypingMessage';

const Conversation = ({ user, divRef }) => {
  const bottomRef = useRef();
  const topRef = useRef();

  const {
    messages,
    fetchPrevPage,
    prevPage,
    getMessageAdded,
    getMessages,
    newMessageNumber,
    resetsNumberMessages,
    typing,
    typingStart,
    typingEnd,
    participantJoin,
    participantLeft,
  } = useConversation();

  const { isNearScreen: isNearBottomScreen } = useNearScreen({
    externalRef: !messages ? null : bottomRef,
    once: false,
  });

  const { isNearScreen: isNearTopScreen } = useNearScreen({
    externalRef: !messages ? null : topRef,
    once: false,
  });

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  useEffect(() => {
    getMessageAdded();
  }, [getMessageAdded]);

  useEffect(() => {
    participantJoin();
  }, [participantJoin]);

  useEffect(() => {
    participantLeft();
  }, [participantLeft]);

  return (
    <div
      id="scrollableDiv"
      className="flex flex-col-reverse overflow-scroll h-5/6"
      ref={divRef}
    >
      <div className="pt-1" ref={bottomRef}></div>
      <ButtonBottom
        divRef={divRef}
        isNearBottomScreen={isNearBottomScreen}
        newMessageNumber={newMessageNumber}
        resetsNumberMessages={resetsNumberMessages}
      />
      <TypingMessage
        typing={typing}
        typingStart={typingStart}
        typingEnd={typingEnd}
      />
      {messages && (
        <InfiniteScroll
          dataLength={messages?.length}
          next={fetchPrevPage}
          inverse={true}
          hasMore={prevPage && isNearTopScreen}
          style={{ display: 'flex', flexDirection: 'column-reverse' }}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          {messages.map((message, index) => (
            <Message
              key={index}
              body={message?.body}
              author={message?.author}
              userName={user?.user_metadata?.user_name}
              date={message?.dateCreated}
              type={message?.type}
              identity={message?.identity}
            />
          ))}
        </InfiniteScroll>
      )}
      <div className="pt-1" ref={topRef}></div>
    </div>
  );
};

export default Conversation;
