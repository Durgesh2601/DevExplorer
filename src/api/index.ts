const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN as string;
const fetchAllUsers = async () => {
  const apiURL = "https://api.github.com/users";
  try {
    const response = await fetch(apiURL, {
      headers: {
        accept: "application/vnd.github+json",
        authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const getUserDetails = async (userId: string) => {
  try {
    const apiURl = `https://api.github.com/users/${userId}`;
    const response = await fetch(apiURl, {
      headers: {
        accept: "application/vnd.github+json",
        authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export { fetchAllUsers, getUserDetails };
