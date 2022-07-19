import { loginUser } from 'utils/loginUser';

const ButtonLogin = ({
  background,
  backgroundOpacity,
  text,
  title,
  Icon,
  provider,
}) => {
  return (
    <button
      className={`flex items-center justify-center ${background} ${backgroundOpacity} ${text} text-xl w-4/5 mb-4 border border-green-dark-code font-semibold p-3 px-4 rounded-lg focus:outline-none  transition-all duration-300`}
      onClick={() => loginUser(provider)}
    >
      {Icon}
      <span className="ml-2">{title}</span>
    </button>
  );
};

export default ButtonLogin;
