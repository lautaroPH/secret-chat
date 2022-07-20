import ChevDronDoubleDownSvg from 'components/Room/ChevDronDoubleDownSvg';
import { useEffect, useState } from 'react';

const ButtonBottom = ({
  divRef,
  isNearBottomScreen,
  newMessageNumber,
  resetsNumberMessages,
}) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (isNearBottomScreen) {
      setShowButton(false);
      resetsNumberMessages();
    } else {
      setShowButton(true);
    }
  }, [isNearBottomScreen, resetsNumberMessages]);

  const handleClick = () => {
    divRef.current.scrollTo(0, divRef.current.scrollHeight);
    if (newMessageNumber > 0) {
      resetsNumberMessages();
    }
  };

  return (
    <>
      {showButton && (
        <button
          onClick={handleClick}
          className="absolute z-10 p-1 text-gray-700 bg-gray-400 rounded-full bottom-24 right-3"
        >
          {newMessageNumber > 0 && (
            <span className="absolute flex items-center justify-center w-5 h-5 text-sm text-white bg-green-800 rounded-full -left-2 -top-3">
              {newMessageNumber}
            </span>
          )}
          <ChevDronDoubleDownSvg />
        </button>
      )}
    </>
  );
};

export default ButtonBottom;
