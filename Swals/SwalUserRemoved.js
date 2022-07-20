export const swalUserRemoved = (identity) => {
  return {
    title: `User "${identity}" removed`,
    icon: 'success',
    background: 'rgb(31 41 55)',
    color: '#fff',
    confirmButtonColor: '#115a11',
  };
};
