import { Dialog, Transition } from '@headlessui/react';
import ChatInfo from 'components/ChatOptions/ChatInfo';
import { Fragment } from 'react';

const ModalChatOptions = ({ openModal, setOpenModal }) => {
  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-30 overflow-y-auto"
        onClose={setOpenModal}
      >
        <div className="flex items-center justify-center max-h-screen px-3 pt-4 pb-64 text-center">
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
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-lg px-4 py-5 overflow-hidden text-left transition-all transform bg-gray-800 rounded-lg shadow-xl sm:my-8 sm:align-middle">
              <ChatInfo setOpenModal={setOpenModal} />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalChatOptions;
