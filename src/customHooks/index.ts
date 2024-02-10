import { useState, useEffect } from "react";
import { FetchUserDataResult, UserData } from "../types";
import { getUserDetails } from "../api";

const useFetchUserData = (userId: string): FetchUserDataResult | null => {
  const [userDetails, setUserDetails] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUserDetails(userId);
        setUserDetails(data);
      } catch (error) {
        console.error("Error fetching users data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [userId]);

  return { userDetails, loading };
};

export default useFetchUserData;
