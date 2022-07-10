import { PROVIDER_VALUES } from './providerValues';
import { supabaseClient } from './supabaseClient';

export const loginUser = async (provider) => {
  if (provider === PROVIDER_VALUES.github) {
    const { error } = await supabaseClient.auth.signIn({
      provider,
    });

    if (error) {
      alert(error);
    }
  }
};
