export const swalRemoveUser = (identity) => {
  return {
    title: `You want to remove the user "${identity}"?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#115a11',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Remove',
    background: 'rgb(31 41 55)',
    color: '#fff',
  };
};
