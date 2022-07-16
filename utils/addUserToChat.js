import { Client } from '@twilio/conversations';

export const addUserToChat = async (conversation, accessToken, user) => {
  const client = new Client(accessToken);

  return new Promise((resolve, reject) => {
    client.on('stateChanged', async (state) => {
      if (state === 'initialized') {
        try {
          await conversation.add(user);
        } catch (e) {
          reject(e);
        }

        resolve('User added to chat');
      }
    });
  });
};
