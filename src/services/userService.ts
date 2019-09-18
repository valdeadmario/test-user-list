const SERVER_URL = "http://dev.frevend.com/json/users.json";

export const getPosts = async () => {
  const response = await fetch(SERVER_URL);

  return response.json();
};
