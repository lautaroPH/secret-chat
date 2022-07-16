const Message = ({ body, author, userName, date }) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const day = date.getDay();

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <div
      className={`m-2 ${author === userName ? 'text-right ' : 'text-left '}`}
    >
      {days[day]}
      <small className="text-xs">{author}</small>
      <div
        className={`${
          author === userName ? 'justify-end ' : 'justify-start '
        } flex items-center`}
      >
        <p className="p-0 m-0">{body}</p>
        <small className="ml-3 text-xs">{`${hour}:${minute}`}</small>
      </div>
    </div>
  );
};

export default Message;
