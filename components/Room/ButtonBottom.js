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
        <button onClick={handleClick} className="absolute bottom-24 right-3">
          {newMessageNumber > 0 && newMessageNumber}
          <ChevDronDoubleDownSvg />
        </button>
      )}
    </>
  );
};

export default ButtonBottom;
