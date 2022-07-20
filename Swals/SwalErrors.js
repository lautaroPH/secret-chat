import { errorsMessages } from 'utils/errorsMessages';

export const swalErrors = (error) => {
  return {
    title: 'Error',
    text: errorsMessages(error),
    icon: 'error',
    background: 'rgb(31 41 55)',
    color: '#fff',
    confirmButtonColor: '#115a11',
  };
};
