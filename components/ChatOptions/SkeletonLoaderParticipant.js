const SkeletonLoaderParticipant = () => {
  return (
    <li className="flex w-full h-auto py-2 mt-2 mb-2 overflow-hidden bg-gray-800 border-gray-800 animate-pulse">
      <div className="flex items-center w-full">
        <div className="">
          <div className="w-10 h-10 mr-3 bg-gray-700 rounded-full"></div>
        </div>
        <div className="w-full">
          <div className="w-32 p-2 bg-gray-700 rounded-lg" />
        </div>
      </div>
    </li>
  );
};

export default SkeletonLoaderParticipant;
