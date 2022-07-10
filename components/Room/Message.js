const Message = ({ body, author }) => {
  return (
    <div className={`m-2 w-3/6`}>
      <p className="p-0 m-0">{body}</p>
      <small className="text-xs">{author}</small>
    </div>
  );
};

export default Message;
