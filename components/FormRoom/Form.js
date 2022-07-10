import useSession from 'hooks/useSession';
import { useContext, useState } from 'react';
import { getAccessToken } from 'utils/getAccessToken';
import { useRouter } from 'next/router';
import { ActiveConversation } from 'context/ConversationContext';
import { createConversation } from 'utils/creatConversation';
import { ACTIONS_CHAT } from 'utils/actionsChat';
import { joinConversation } from 'utils/joinConversation';
import { errorsMessages } from 'utils/errorsMessages';

const Form = ({ title, buttonTitle, action, setOpenForm, setButtonActive }) => {
  const [room, setRoom] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const router = useRouter();
  const { setActiveConversation } = useContext(ActiveConversation);

  const roomTrim = room.trim();

  const handleChange = (e) => {
    if (error) {
      setError('');
    }
    setRoom(e.target.value);
  };

  const handleClickCanel = () => {
    setOpenForm(false);
    setRoom('');
    setButtonActive(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!session || session.access_token == null || !roomTrim) return;
    getAccessToken({ token: session.access_token })
      .then((accessToken) => {
        if (action === ACTIONS_CHAT.CREATE_CHAT) {
          createConversation({
            room,
            accessToken,
          })
            .then((conversation) => {
              setActiveConversation(conversation);
              router.push(`/${roomTrim}`);
            })
            .catch((err) => {
              setLoading(false);
              setError(errorsMessages(err.message));
              setRoom('');
            });
        } else if (action === ACTIONS_CHAT.JOIN_CHAT) {
          joinConversation({
            room,
            accessToken,
          })
            .then((conversation) => {
              setActiveConversation(conversation);
              router.push(`/${roomTrim}`);
            })
            .catch((err) => {
              setLoading(false);
              setError(errorsMessages(err.message));
              setRoom('');
            });
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(errorsMessages(err.message));
        setRoom('');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 mb-10">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="room-select"
          className={`${
            error && 'text-red-600'
          } block mb-2 text-lg font-medium text-green-code`}
        >
          {error ? error : title}
        </label>
        <input
          id="room-select"
          type="text"
          className={`${
            error && 'border-red-600'
          } w-full p-2 text-2xl text-center bg-black border rounded-lg placeholder:lowercase placeholder:text-green-code text-green-code border-green-dark-code sm:text-md focus:outline-none`}
          value={room}
          onChange={handleChange}
          autoComplete="off"
          autoFocus={true}
          pattern="[A-Za-z0-9\s]+"
        />
        <div className="pt-5">
          <button
            disabled={!roomTrim || loading || error}
            type="submit"
            className="w-2/5 p-2 px-4 mr-3 text-lg font-semibold tracking-widest transition-all duration-300 bg-transparent bg-black bg-opacity-50 border rounded-lg border-green-dark-code disabled:opacity-60 disabled:cursor-not-allowed text-green-code hover:bg-transparent hover:text-white focus:outline-none"
          >
            {buttonTitle}
          </button>
          <button
            onClick={handleClickCanel}
            type="submit"
            className="w-2/5 p-2 px-4 text-lg font-semibold tracking-widest transition-all duration-300 bg-transparent bg-black bg-opacity-50 border rounded-lg border-green-dark-code text-green-code hover:bg-transparent hover:text-white focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
