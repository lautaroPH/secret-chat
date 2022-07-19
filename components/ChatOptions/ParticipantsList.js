import { ActiveConversation } from 'context/ConversationContext';
import { useContext, useEffect, useState } from 'react';
import { getProfiles } from 'utils/getProfilesSupabase';
import Participant from './Participant';

const ParticipantsList = ({ username, createdBy, setOpenModal }) => {
  const [participantsChat, setParticipantsChat] = useState([]);
  const { activeConversation } = useContext(ActiveConversation);

  useEffect(() => {
    activeConversation.getParticipants().then((participants) => {
      participants.map((participant) => {
        getProfiles(participant.identity).then((profile) => {
          if (profile && profile.length > 0) {
            setParticipantsChat((prueba) => [
              ...prueba,
              {
                ...profile[0],
                sid: participant.sid,
                roleSid: participant.roleSid,
              },
            ]);
          }
        });
      });
    });
  }, [activeConversation]);

  return (
    <ul className="pt-5">
      {participantsChat?.map((participant) => (
        <Participant
          key={participant.sid}
          setOpenModal={setOpenModal}
          sid={participant.sid}
          image={participant.image}
          userName={participant.userName}
          username={username}
          createdBy={createdBy}
        />
      ))}
    </ul>
  );
};

export default ParticipantsList;
