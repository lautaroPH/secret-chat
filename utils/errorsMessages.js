export const errorsMessages = (err) => {
  if (err === 'Conflict room') {
    return 'Room already exists';
  } else if (err === 'Not Found room' || err === 'Not Found accessRoom') {
    return "Room doesn't exist";
  } else if (err === 'Forbidden room' || err === 'Forbidden accessRoom') {
    return "You don't have permission to access this room";
  } else if (err === 'Conflict addUser') {
    return 'User already exists in the chat';
  } else if (err === 'Bad Request addUser') {
    return "User doesn't exist";
  }
  return err;
};
