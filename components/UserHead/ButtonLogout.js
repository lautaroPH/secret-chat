import { supabaseClient } from 'utils/supabaseClient';
import LogoutSvg from './LogoutSvg';

const ButtonLogout = () => {
  const handleClick = async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      alert(error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center p-[6px] transition-all duration-300 border border-white rounded hover:bg-white hover:text-primary-dark focus:outline-none"
    >
      <LogoutSvg />
      <span className="ml-2 mr-1 text-sm">Cerrar sesion</span>
    </button>
  );
};

export default ButtonLogout;
