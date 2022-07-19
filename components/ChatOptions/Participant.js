import Image from 'next/image';
import IsAdmin from './IsAdmin';
import RemoveUser from './RemoveUser';

const Participant = ({
  sid,
  image,
  userName,
  createdBy,
  username,
  setOpenModal,
}) => {
  return (
    <li key={sid} className="flex items-center pb-5">
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={userName}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="flex items-center justify-between w-full ml-3">
        <p className="font-medium leading-5">{userName}</p>
        {userName === createdBy && <IsAdmin />}

        {userName !== createdBy && username === createdBy && (
          <RemoveUser identity={userName} setOpenModal={setOpenModal} />
        )}
      </div>
    </li>
  );
};

export default Participant;
