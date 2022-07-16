import { ActiveConversation } from 'context/ConversationContext';
import useNearScreen from 'hooks/useNearScreen';
import { useContext, useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Message from './Message';

const Conversation = ({ user, divRef }) => {
  const { activeConversation } = useContext(ActiveConversation);
  const [messages, setMessages] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const externalRef = useRef();

  const { isNearScreen } = useNearScreen({
    externalRef: !messages ? null : externalRef,
    once: false,
  });

  useEffect(() => {
    if (!messages) {
      activeConversation.getMessages().then((paginator) => {
        setMessages(paginator.items.reverse());
        setPrevPage(paginator.hasPrevPage ? paginator.prevPage : null);
      });
    }
  }, [activeConversation, messages]);

  useEffect(() => {
    if (messages) {
      activeConversation.on('messageAdded', (message) => {
        if (user?.user_metadata?.user_name !== message.author) {
          isNearScreen
            ? console.log('you are near screen')
            : setShowButton(true);
        }
        setMessages([message, ...messages]);
      });
    }
  }, [activeConversation, user, messages, isNearScreen, divRef]);

  const fetchPrevPage = () => {
    prevPage.then((paginator) => {
      setMessages([...messages, ...paginator.items.reverse()]);
      setPrevPage(paginator.hasPrevPage ? paginator.prevPage : null);
    });
  };

  // useEffect(() => {
  //   return () =>
  //     activeConversation.on('participantJoined', (participant) => {
  //       console.log(participant);
  //     });
  // }, [activeConversation]);
  // useEffect(() => {
  //   activeConversation.on('typingStarted', (messageTyping) => {
  //     console.log(messageTyping, 'typingStarted');
  //   });
  // }, [activeConversation]);

  // useEffect(() => {
  //   activeConversation.on('typingEnded', (messageTyping) => {
  //     console.log(messageTyping, 'typingEnded');
  //   });
  // }, [activeConversation]);

  return (
    <>
      <div
        id="scrollableDiv"
        className="flex flex-col-reverse overflow-scroll h-5/6"
        ref={divRef}
      >
        <div ref={externalRef}></div>
        {messages && (
          <InfiniteScroll
            dataLength={messages?.length}
            next={fetchPrevPage}
            inverse={true}
            hasMore={prevPage}
            style={{ display: 'flex', flexDirection: 'column-reverse' }}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            {messages.map((message, index) => (
              <Message
                key={index + message.body}
                body={message.body}
                author={message.author}
                userName={user?.user_metadata?.user_name}
                date={message.dateCreated}
              />
            ))}
          </InfiniteScroll>
        )}
      </div>
    </>
  );
};

export default Conversation;
