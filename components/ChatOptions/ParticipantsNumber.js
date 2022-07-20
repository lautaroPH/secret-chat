import useConversation from 'hooks/useConversation';
import { useEffect } from 'react';

const ParticipantsNumber = () => {
  const { getParticipantsCount, participantsCount } = useConversation();

  useEffect(() => {
    getParticipantsCount();
  }, [getParticipantsCount]);

  return <p className="text-sm opacity-90">{participantsCount} participants</p>;
};

export default ParticipantsNumber;
