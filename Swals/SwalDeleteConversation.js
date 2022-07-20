export const swalDeleteConversation = (conversationName) => {
  return {
    title: `You delete the chat "${conversationName}"`,
    icon: 'success',
    background: 'rgb(31 41 55)',
    color: '#fff',
    confirmButtonColor: '#115a11',
  };
};
