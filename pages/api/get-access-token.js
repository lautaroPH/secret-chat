import twilio from 'twilio';
import { supabaseClient } from 'utils/supabaseClient';

const TWILIO_ACCOUNT_SID = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
const TWILIO_API_KEY = process.env.NEXT_PUBLIC_TWILIO_API_KEY;
const TWILIO_API_SECRET = process.env.NEXT_PUBLIC_TWILIO_API_SECRET;
const SERVICE_SID = process.env.NEXT_PUBLIC_SERVICE_SID;

export default async function handler(request, response) {
  const jwt = request.headers.jwt;
  if (jwt == null)
    return response.status(401).json({ error: 'No JWT provided' });

  const user = await supabaseClient.auth.api.getUser(jwt);
  const identity = user.data.user_metadata.user_name;

  if (identity == null)
    return response.status(401).json({ error: 'No identity provided' });

  const { AccessToken } = twilio.jwt;
  const { ChatGrant } = AccessToken;

  const accessToken = new AccessToken(
    TWILIO_ACCOUNT_SID,
    TWILIO_API_KEY,
    TWILIO_API_SECRET,
    {
      identity,
    },
  );

  const conversationsGrant = new ChatGrant({
    serviceSid: SERVICE_SID,
  });

  accessToken.addGrant(conversationsGrant);

  response.status(200).json({ accessToken: accessToken.toJwt() });
}
