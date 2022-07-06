export const getAccessToken = async ({ token }) => {
  const res = await fetch('http://localhost:3000/api/get-access-token', {
    headers: {
      jwt: token,
    },
  });

  if (!res.ok) throw new Error('Error getting access token');

  const { accessToken } = await res.json();
  return accessToken;
};
