export const swalLeaveDeleteChatButton = (username, createdBy, chatName) => {
  return {
    title:
      username === createdBy
        ? `You want to delete the chat "${chatName}"?`
        : `You want to leave the chat "${chatName}"?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: username === createdBy ? 'Delete' : 'Leave',
  };
};
