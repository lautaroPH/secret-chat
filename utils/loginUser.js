import { swalErrors } from 'Swals/SwalErrors';
import Swal from 'sweetalert2';
import { PROVIDER_VALUES } from './providerValues';
import { supabaseClient } from './supabaseClient';

export const loginUser = async (provider) => {
  if (provider === PROVIDER_VALUES.github) {
    const { error } = await supabaseClient.auth.signIn({
      provider,
    });

    if (error) {
      Swal.fire(swalErrors(`${error.message} login`));
    }
  }
};
