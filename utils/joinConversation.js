import { Client } from '@twilio/conversations';

export const joinConversation = async ({ room, accessToken }) => {
  const client = new Client(accessToken);

  return new Promise((resolve, reject) => {
    client.on('stateChanged', async (state) => {
      if (state === 'initialized') {
        let conversation;

        try {
          conversation = await client.getConversationByUniqueName(room.trim());

          if (conversation?.channelState?.status === 'joined') {
            resolve(conversation);
          } else {
            reject(new Error('You are not invited in this conversation'));
          }
        } catch (e) {
          reject(e);
        }
      }
    });
  });
};
