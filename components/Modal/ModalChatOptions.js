import { Dialog, Transition } from '@headlessui/react';
import UserAddSvg from 'components/UserAddSvg';
import { ActiveConversation } from 'context/ConversationContext';
import { useRouter } from 'next/router';
import { Fragment, useContext, useEffect, useState } from 'react';
// const options = {
//   method: 'GET',
//   headers: {
//     SECRET_KEY:
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoYWt2amV0amh4dGNkemNtcHJtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NjMzNjgyMywiZXhwIjoxOTcxOTEyODIzfQ.Fh6Zr1bn_0slDX6R_YbOdIjoq14zHXQwo0NfIP8x6ws',
//     APIKEY:
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoYWt2amV0amh4dGNkemNtcHJtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NjMzNjgyMywiZXhwIjoxOTcxOTEyODIzfQ.Fh6Zr1bn_0slDX6R_YbOdIjoq14zHXQwo0NfIP8x6ws',
//   },
// };
const ModalChatOptions = ({ openModal, setOpenModal }) => {
  const [participantsCount, setparticipantsCount] = useState(0);
  const { activeConversation } = useContext(ActiveConversation);
  const router = useRouter();

  useEffect(() => {
    activeConversation.getParticipantsCount().then(setparticipantsCount);
  }, [activeConversation]);

  //   useEffect(() => {
  //     fetch('http://localhost:3000/api/list-user', options)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, [activeConversation]);

  const handleClick = () => {
    // activeConversation.delete().then(() => {
    //   router.push("/")
    //   alert("Chat deleted")
    // });
    // activeConversation.leave().then(() => {
    //   router.push('/');
    //   alert('Chat left');
    // });
  };

  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-30 overflow-y-auto"
        onClose={setOpenModal}
      >
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95 translate-x-full"
            enterTo="opacity-100 scale-100 translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100 translate-x-0"
            leaveTo="opacity-0 scale-95 translate-x-full"
          >
            <div className="inline-block w-full max-w-lg px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform rounded-lg shadow-xl bg-gray-800 sm:my-8 sm:align-middle">
              <div>
                <p>{participantsCount} participants</p>
                <div className="flex items-center pt-5">
                  <div className="flex-shrink-0 bg-green-700 rounded-full h-10 w-10 flex items-center justify-center">
                    <UserAddSvg />
                    {/* <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Placeholder image"
                    /> */}
                  </div>
                  <div className="ml-3 flex justify-between w-full items-center">
                    <p className="leading-5 font-medium">Add participants</p>
                  </div>
                </div>
                <ul className="pt-5">
                  <li className="flex items-center pb-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Placeholder image"
                      />
                    </div>
                    <div className="ml-3 flex justify-between w-full items-center">
                      <p className="leading-5 font-medium">
                        <a href="#"> @bravesaturn</a>
                      </p>
                      <p className="text-xs tracking-widest text-green-code border border-green-code p-[3px]">
                        Admin
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center pb-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Placeholder image"
                      />
                    </div>
                    <div className="ml-3 flex justify-between w-full items-center">
                      <p className="leading-5 font-medium">
                        <a href="#"> @bravesaturn</a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center pb-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Placeholder image"
                      />
                    </div>
                    <div className="ml-3 flex justify-between w-full items-center">
                      <p className="leading-5 font-medium">
                        <a href="#"> @bravesaturn</a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center pb-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Placeholder image"
                      />
                    </div>
                    <div className="ml-3 flex justify-between w-full items-center">
                      <p className="leading-5 font-medium">
                        <a href="#"> @bravesaturn</a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center pb-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Placeholder image"
                      />
                    </div>
                    <div className="ml-3 flex justify-between w-full items-center">
                      <p className="leading-5 font-medium">
                        <a href="#"> @bravesaturn</a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center pb-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Placeholder image"
                      />
                    </div>
                    <div className="ml-3 flex justify-between w-full items-center">
                      <p className="leading-5 font-medium">
                        <a href="#"> @bravesaturn</a>
                      </p>
                    </div>
                  </li>
                </ul>
                {participantsCount >= 7 && <p>See all (30 more)</p>}
              </div>
              <div className="pt-5">
                <button onClick={handleClick} className="text-red-500">
                  Leave chat
                </button>
                {/* <button>Delete chat</button> */}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalChatOptions;
