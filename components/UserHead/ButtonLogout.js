import { swalLogoutError } from 'Swals/SwalLogoutError';
import Swal from 'sweetalert2';
import { supabaseClient } from 'utils/supabaseClient';

const ButtonLogout = () => {
  const handleClick = async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      Swal.fire(swalLogoutError(error.message));
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center transition-all duration-300 text-green-code focus:outline-none"
    >
      <span className="ml-1 mr-1 text-sm">Log out</span>
    </button>
  );
};

export default ButtonLogout;
