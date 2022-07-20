import MessageAuthor from './MessageAuthor';
import MessageNotAuthor from './MessageNotAuthor';

const MessageText = ({ body, author, userName, date }) => {
  const hour = date?.getHours();
  const minute = date?.getMinutes();
  const numberDate = date?.getDate();
  const month = date?.getMonth();
  const year = date?.getFullYear();

  const fullTime = `${hour}:${minute < 10 ? `0${minute}` : minute}`;
  const fullDate = `${numberDate}/${month}/${year}`;

  const isAuthor = author === userName;

  return (
    <>
      {isAuthor ? (
        <MessageAuthor body={body} fullTime={fullTime} fullDate={fullDate} />
      ) : (
        <MessageNotAuthor
          body={body}
          fullTime={fullTime}
          fullDate={fullDate}
          author={author}
        />
      )}
    </>
  );
};

export default MessageText;
