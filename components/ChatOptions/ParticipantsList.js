import { ActiveConversation } from 'context/ConversationContext';
import { useContext, useEffect, useState } from 'react';
import { getProfiles } from 'utils/getProfilesSupabase';
import Participant from './Participant';
import SkeletonLoaderParticipant from './SkeletonLoaderParticipant';

const ParticipantsList = ({ username, createdBy, setOpenModal }) => {
  const [participantsChat, setParticipantsChat] = useState([]);
  const { activeConversation } = useContext(ActiveConversation);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    activeConversation.getParticipants().then((participants) => {
      participants.map((participant) => {
        getProfiles(participant.identity).then((profile) => {
          if (profile && profile.length > 0) {
            setParticipantsChat((participantsChat) => [
              ...participantsChat,
              {
                ...profile[0],
                sid: participant.sid,
                roleSid: participant.roleSid,
              },
            ]);
            setLoading(false);
          }
        });
      });
    });
  }, [activeConversation]);

  return (
    <ul className="px-2 py-1 mt-2 overflow-x-hidden overflow-y-scroll bg-gray-700 rounded-lg max-h-96">
      {loading ? (
        <>
          <SkeletonLoaderParticipant />
          <SkeletonLoaderParticipant />
          <SkeletonLoaderParticipant />
          <SkeletonLoaderParticipant />
        </>
      ) : (
        participantsChat?.map((participant) => (
          <Participant
            key={participant.sid}
            setOpenModal={setOpenModal}
            sid={participant.sid}
            image={participant.image}
            userName={participant.userName}
            username={username}
            createdBy={createdBy}
          />
        ))
      )}
    </ul>
  );
};

export default ParticipantsList;
