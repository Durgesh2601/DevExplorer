import { useEffect, useState } from "react";
import { FetchUserDataResult, UserData } from "../types";
import { getUserDetails } from "../api";
import { useUserContext } from "../context/UserDataContext";

const useFetchUserData = (userId: string): FetchUserDataResult | null => {
  const { userData, setUserData } = useUserContext();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        // Check if data exists in context
        if (userData[userId]) {
          setLoading(false);
          return;
        }

        const data = await getUserDetails(userId);
        setUserData(userId, data);
      } catch (error) {
        console.error("Error fetching user data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId, setUserData, userData]); // Add userData to dependencies

  return { userDetails: userData[userId] || null, loading };
};

export default useFetchUserData;
