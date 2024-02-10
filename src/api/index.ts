const fetchAllUsers = async () => {
  const apiURL = "https://api.github.com/users";
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const getUserDetails = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export { fetchAllUsers, getUserDetails };
