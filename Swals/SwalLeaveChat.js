export const swalLeaveChat = (conversationName) => {
  return {
    title: `You leave the chat "${conversationName}"`,
    icon: 'success',
    background: 'rgb(31 41 55)',
    color: '#fff',
    confirmButtonColor: '#115a11',
  };
};
