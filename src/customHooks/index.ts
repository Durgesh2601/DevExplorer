import { useState, useEffect } from "react";
import { UserData } from "../types";
import { getUserDetails } from "../api";

const useFetchUserData = (url: string): UserData | null => {
  const [userDetails, setUserDetails] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUserDetails(url);
        setUserDetails(data);
      } catch (error) {
        console.error("Error fetching users data", error);
      }
    };

    fetchUsers();
  }, [url]);

  return userDetails;
};

export default useFetchUserData;
