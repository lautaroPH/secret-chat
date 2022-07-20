import BodyMessage from './BodyMessage';
import TriangleLeftSvg from './TriangleLeftSvg';

const MessageNotAuthor = ({ body, fullTime, fullDate, author }) => {
  return (
    <div className="flex flex-col items-start m-3">
      <div className="rounded-tr-lg bg-[#262628] max-w-[80%] min-w-[40%]  bg-opacity-95 rounded-br-lg rounded-bl-lg  relative px-2 py-1">
        <span className="absolute top-0 w-2 h-3 -left-2 text-[#262628]">
          <TriangleLeftSvg />
        </span>
        <small className="text-sm">{author}</small>
        <BodyMessage body={body} fullTime={fullTime} fullDate={fullDate} />
      </div>
    </div>
  );
};

export default MessageNotAuthor;
