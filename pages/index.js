import ButtonsLogin from 'components/Login/ButtonsLogin';
import UserHead from 'components/UserHead/UserHead';
import useUser from 'hooks/useUser';
import Title from 'components/Title';
import StartChat from 'components/FormRoom/StartChat';
import JoinChat from 'components/FormRoom/JoinChat';
import { useEffect, useState } from 'react';
import { createUser } from 'utils/createUser';
import Head from 'next/head';

export default function Home() {
  const user = useUser();
  const [buttonActive, setButtonActive] = useState(false);
  const [firstTimeCreateUser, setFirstTimeCreateUser] = useState(false);
  useEffect(() => {
    if (user && !firstTimeCreateUser) {
      createUser(user);
      setFirstTimeCreateUser(true);
    }
  }, [user, firstTimeCreateUser]);

  return (
    <>
      <Head>
        <title>Secret chat</title>
        <meta name="description" content="Midudev hackathon project" />
      </Head>
      {user && <UserHead user={user} />}
      <div className="flex justify-center mt-16">
        <Title />
      </div>
      {user == null && <ButtonsLogin />}
      {user && (
        <div className="flex flex-col justify-center gap-10 mt-20">
          <StartChat
            setButtonActive={setButtonActive}
            buttonActive={buttonActive}
          />
          <JoinChat
            setButtonActive={setButtonActive}
            buttonActive={buttonActive}
          />
        </div>
      )}{' '}
    </>
  );
}
