import ButtonLogout from 'components/UserHead/ButtonLogout';
import UserInfo from 'components/UserHead/UserInfo';
const UserHead = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <UserInfo />
      <div>
        <ButtonLogout />
      </div>
    </div>
  );
};

export default UserHead;
