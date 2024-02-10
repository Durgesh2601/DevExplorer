import React from "react";
import { useParams } from "react-router-dom";
import { Avatar, Typography } from "@mui/material";
import useFetchUserData from "../../customHooks";
import { FetchUserDataResult } from "../../types";

const UserDetailsPage: React.FC = () => {
  const { username } = useParams<{ username: string }>();

  const fetchedResults: FetchUserDataResult | null = useFetchUserData(
    username || ""
  );

  if (!fetchedResults) return;

  const { userDetails, loading } = fetchedResults;

  if (!userDetails || loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Avatar src={userDetails.avatar_url} alt={userDetails.login} />
      <Typography variant="h5">{userDetails.name}</Typography>
      <Typography variant="body1">{userDetails.login}</Typography>
      <Typography variant="body1">Company: {userDetails.company}</Typography>
      <Typography variant="body1">
        Followers: {userDetails.followers}
      </Typography>
      <Typography variant="body1">
        Following: {userDetails.following}
      </Typography>
      <Typography variant="body1">
        Public Repositories: {userDetails.public_repos}
      </Typography>
    </div>
  );
};

export default UserDetailsPage;
