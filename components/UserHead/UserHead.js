import ButtonLogout from 'components/UserHead/ButtonLogout';
import UserInfo from 'components/UserHead/UserInfo';
const UserHead = () => {
  return (
    <header className="flex items-center justify-between px-5 py-5 bg-black bg-opacity-50">
      <UserInfo />
      <div>
        <ButtonLogout />
      </div>
    </header>
  );
};

export default UserHead;
