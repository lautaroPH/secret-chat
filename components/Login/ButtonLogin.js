import { useState } from 'react';
import { supabaseClient } from 'utils/supabaseClient';

const ButtonLogin = ({
  background,
  text,
  backgroundHover,
  textHover,
  title,
  firstIcon,
  secondIcon,
  provider,
}) => {
  const [githubHoverIcon, setGithubHoverIcon] = useState(false);

  const handleGithubHover = async () => {
    const { error } = await supabaseClient.auth.signIn({
      provider: 'github',
    });

    if (error) {
      alert(error);
    }
  };

  return (
    <button
      className={`flex items-center justify-center ${background} ${text} ${backgroundHover} ${textHover} w-4/5 mb-4 border border-white font-bold h-12 rounded focus:outline-none  transition-all duration-300`}
      onMouseOver={() => setGithubHoverIcon(true)}
      onMouseLeave={() => setGithubHoverIcon(false)}
      onClick={() => {
        provider === 'Github' && handleGithubHover();
      }}
    >
      {!githubHoverIcon ? firstIcon : secondIcon}
      <span className="w-40">{title}</span>
    </button>
  );
};

export default ButtonLogin;
