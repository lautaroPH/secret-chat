import MessageJoined from './MessageJoined';
import MessageLeft from './MessageLeft';
import MessageText from './MessageText';

const Message = ({ body, author, userName, date, type, identity }) => {
  return (
    <>
      {type === 'text' && (
        <MessageText
          body={body}
          author={author}
          userName={userName}
          date={date}
        />
      )}
      <MessageJoined type={type} identity={identity} />
      <MessageLeft identity={identity} type={type} />
    </>
  );
};

export default Message;
