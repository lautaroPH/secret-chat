import { supabaseClient } from './supabaseClient';

export const getProfiles = async (identity) => {
  const { data } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('userName', identity);

  return data;
};
