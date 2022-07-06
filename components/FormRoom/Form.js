import useSession from 'hooks/useSession';
import { useState } from 'react';
import { createOrJoinConversation } from 'utils/createOrJoinConversation';
import { getAccessToken } from 'utils/getAccessToken';
import { useRouter } from 'next/router';

const Form = () => {
  const [room, setRoom] = useState('');
  const session = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session || session.access_token == null) return;

    const accessToken = await getAccessToken({ token: session.access_token });
    const conversation = await createOrJoinConversation({ room, accessToken });

    console.log(conversation);

    if (conversation) {
      // activeConversation.set(conversation);
      router.push(`/${room}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-100">
          Introduce la sala del chat a la que quieres entrar o crear
        </label>
        <input
          id="room-select"
          type="text"
          className="block w-full p-4 text-2xl text-center text-gray-900 uppercase border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:outline-none"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <button
          type="submit"
          className="w-full p-2 mt-2 font-medium transition-all duration-300 bg-white border border-white rounded-lg text-primary-dark hover:bg-transparent hover:text-white focus:outline-none"
        >
          ¡Entrar!
        </button>
      </form>
    </div>
  );
};

export default Form;
