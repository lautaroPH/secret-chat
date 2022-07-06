import { supabaseClient } from 'utils/supabaseClient';
import { useState, useEffect } from 'react';
import { eventsUser } from 'utils/eventsUser';

const useSession = () => {
  const [session, setSession] = useState();

  useEffect(() => {
    setSession(supabaseClient.auth.session());
    getOnAuthStateChange();
  }, []);

  const getOnAuthStateChange = () => {
    supabaseClient.auth.onAuthStateChange((event, actualSession) => {
      if (event === eventsUser.SIGNED_IN) {
        setSession(actualSession);
      } else if (event === eventsUser.SIGNED_OUT) {
        setSession(null);
      }
    });
  };

  return session;
};

export default useSession;
