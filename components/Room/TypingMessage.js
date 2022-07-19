import React, { useEffect } from 'react';

const TypingMessage = ({ typing, typingStart, typingEnd }) => {
  useEffect(() => {
    typingStart();
  }, [typingStart]);

  useEffect(() => {
    typingEnd();
  }, [typingEnd]);

  return <>{typing?.isTyping && <p>{typing.identity} is writing</p>}</>;
};

export default TypingMessage;
