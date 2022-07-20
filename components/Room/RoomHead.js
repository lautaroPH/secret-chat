import ThreePointsSvg from './ThreePointsSvg';

const RoomHead = ({ setOpenChatOptionsModal, friendlyName }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-black bg-opacity-50">
      <div>
        <h2 className="text-3xl text-left">{friendlyName}</h2>
      </div>
      <button onClick={() => setOpenChatOptionsModal(true)}>
        <ThreePointsSvg />
      </button>
    </div>
  );
};

export default RoomHead;
