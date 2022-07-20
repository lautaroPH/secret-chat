import BodyMessage from './BodyMessage';
import TriangleRightSvg from './TriangleRightSvg';

const MessageAuthor = ({ body, fullTime, fullDate }) => {
  return (
    <div className="items-end my-[2px] mr-3 flex flex-col">
      <div
        className="rounded-tl-lg bg-[#115a11] 
         max-w-[80%] min-w-[40%]  bg-opacity-95 rounded-br-lg rounded-bl-lg  relative px-2 py-1"
      >
        <span className="absolute top-0 w-2 h-3 -right-2 text-[#115a11]">
          <TriangleRightSvg />
        </span>
        <BodyMessage body={body} fullTime={fullTime} fullDate={fullDate} />
      </div>
    </div>
  );
};

export default MessageAuthor;
