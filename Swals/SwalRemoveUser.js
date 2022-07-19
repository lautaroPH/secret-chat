export const swalRemoveUser = (identity) => {
  return {
    title: `You want to remove the user "${identity}"?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Remove',
  };
};
