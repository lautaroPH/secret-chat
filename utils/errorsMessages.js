export const errorsMessages = (err) => {
  if (err === 'Conflict') {
    return 'Room already exists';
  } else if (err === 'Not Found') {
    return "Room doesn't exist";
  }
  return err;
};
