const SERVER_URL =
  "https://api.github.com/repos/valdeadmario/db/contents/db.json";

export const getPosts = async () => {
  const response = await fetch(SERVER_URL);

  return response.json();
};
