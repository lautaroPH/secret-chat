import { useState } from 'react';
import { loginUser } from 'utils/loginUser';

const ButtonLogin = ({
  background,
  backgroundOpacity,
  text,
  backgroundHover,
  textHover,
  title,
  firstIcon,
  secondIcon,
  provider,
}) => {
  const [githubHoverIcon, setGithubHoverIcon] = useState(false);

  return (
    <button
      className={`flex items-center justify-center ${background} ${backgroundOpacity} ${text} text-xl ${backgroundHover} ${textHover} w-4/5 mb-4 border border-green-dark-code font-semibold p-3 px-4 rounded-lg focus:outline-none  transition-all duration-300`}
      onMouseOver={() => setGithubHoverIcon(true)}
      onMouseLeave={() => setGithubHoverIcon(false)}
      onClick={() => loginUser(provider)}
    >
      {!githubHoverIcon ? firstIcon : secondIcon}
      <span className="ml-2">{title}</span>
    </button>
  );
};

export default ButtonLogin;
