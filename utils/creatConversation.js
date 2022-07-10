import { Client } from '@twilio/conversations';

export const createConversation = async ({ room, accessToken }) => {
  const client = new Client(accessToken);

  return new Promise((resolve, reject) => {
    client.on('stateChanged', async (state) => {
      if (state === 'initialized') {
        let conversation;

        try {
          conversation = await client.createConversation({
            uniqueName: room.trim(),
          });

          await conversation.join();
        } catch (e) {
          reject(e);
        }

        resolve(conversation);
      }
    });
  });
};
