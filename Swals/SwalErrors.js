import { errorsMessages } from 'utils/errorsMessages';

export const swalErrors = (error) => {
  return {
    title: 'Error',
    text: errorsMessages(error),
    icon: 'error',
  };
};
