export const getAccessToken = async ({ token }) => {
  const url = process.env.NEXT_PUBLIC_URL;
  const res = await fetch(`${url}/api/get-access-token`, {
    headers: {
      jwt: token,
    },
  });

  if (!res.ok) throw new Error('Error getting access token');

  const { accessToken } = await res.json();
  return accessToken;
};
