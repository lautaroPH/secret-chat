export const swalLeaveDeleteChatButton = (username, createdBy, chatName) => {
  return {
    title:
      username === createdBy
        ? `You want to delete the chat "${chatName}"?`
        : `You want to leave the chat "${chatName}"?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#115a11',
    cancelButtonColor: '#d33',
    confirmButtonText: username === createdBy ? 'Delete' : 'Leave',
    background: 'rgb(31 41 55)',
    color: '#fff',
  };
};
