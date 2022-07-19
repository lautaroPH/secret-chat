import UserAddSvg from 'components/ChatOptions/UserAddSvg';

const ButtonAddUser = ({ setOpenInput, openInput }) => {
  const handleAddUser = () => {
    setOpenInput(!openInput);
  };

  return (
    <button onClick={handleAddUser} className="flex items-center pt-5">
      <span className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-green-700 rounded-full">
        <UserAddSvg />
      </span>
      <p className="flex items-center justify-between w-full ml-3">
        <span className="font-medium leading-5">Add participants</span>
      </p>
    </button>
  );
};

export default ButtonAddUser;
