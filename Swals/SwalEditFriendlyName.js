export const swalEditFriendlyName = (friendlyName) => {
  return {
    title: 'Edit friendly name',
    input: 'text',
    inputValue: friendlyName,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Edit',
  };
};
