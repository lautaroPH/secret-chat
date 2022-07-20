const MessageJoined = ({ type, identity }) => {
  return (
    <>
      {type === 'participantJoined' && (
        <div className="flex items-center justify-center m-3">
          <p className="px-3 py-1 text-sm bg-[#26456a] bg-opacity-95 rounded-lg">
            {identity} has joined
          </p>
        </div>
      )}
    </>
  );
};

export default MessageJoined;
