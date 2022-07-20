import { swalErrors } from 'Swals/SwalErrors';
import Swal from 'sweetalert2';
import { supabaseClient } from './supabaseClient';

export const createUser = async (user) => {
  const { data: profile } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('id', user.id);
  if (!profile || profile.length === 0) {
    const { error } = await supabaseClient.from('profiles').insert([
      {
        id: user.id,
        userName: user.user_metadata.user_name,
        image: user.user_metadata.avatar_url,
      },
    ]);

    if (error) {
      Swal.fire(swalErrors(`${error.message} createUser`));
    }
  }
};
