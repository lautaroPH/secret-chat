const BodyMessage = ({ body, fullTime, fullDate }) => {
  return (
    <div className="flex flex-col mt-1">
      <p className="mr-2 text-sm ">{body}</p>
      <div
        className={`${
          body.length >= 10 ? 'mt-2' : '-mt-1'
        } flex items-center justify-end`}
      >
        <small className="text-xs text-white opacity-60">
          {`${fullTime} ${fullDate}`}
        </small>
      </div>
    </div>
  );
};

export default BodyMessage;
