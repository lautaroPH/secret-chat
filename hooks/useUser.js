import useSession from './useSession';
import { useState, useEffect } from 'react';

const useUser = () => {
  const session = useSession();
  const [user, setUser] = useState(session?.user);
  useEffect(() => setUser(session?.user), [session]);

  return user;
};

export default useUser;
