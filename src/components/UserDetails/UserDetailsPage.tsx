import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar, Typography } from "@mui/material";

interface User {
  name: string;
  login: string;
  avatar_url: string;
  company: string;
  followers: number;
  following: number;
  public_repos: number;
  loading: boolean;
}

const UserDetailsPage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!user || loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Avatar src={user.avatar_url} alt={user.login} />
      <Typography variant="h5">{user.name}</Typography>
      <Typography variant="body1">{user.login}</Typography>
      <Typography variant="body1">Company: {user.company}</Typography>
      <Typography variant="body1">Followers: {user.followers}</Typography>
      <Typography variant="body1">Following: {user.following}</Typography>
      <Typography variant="body1">
        Public Repositories: {user.public_repos}
      </Typography>
    </div>
  );
};

export default UserDetailsPage;
