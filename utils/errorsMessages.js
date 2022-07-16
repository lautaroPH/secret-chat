export const errorsMessages = (err) => {
  if (err === 'Conflict') {
    return 'Room already exists';
  } else if (err === 'Not Found') {
    return "Room doesn't exist";
  } else if (err === 'Forbidden') {
    return "You don't have permission to access this room";
  }
  return err;
};
