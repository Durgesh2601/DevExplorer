import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Grid,
  Container,
  Paper,
  IconButton,
  Divider,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import ImageShimmer from "../Shimmer";
import useFetchUserData from "../../customHooks";
import UserDetailItem from "./UserDetaiItem";
import userDetailIcons from "./userDetailsIcons";
import { fullWidthKeys } from "../../constants";
import UserDetailsLoading from "../LoadingScreens/UserDetailsLoading";
import { FetchUserDataResult } from "../../types";

const UserDetails: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();

  const fetchedResults: FetchUserDataResult | null = useFetchUserData(
    username || ""
  );

  if (!fetchedResults) return;

  const { userDetails, loading } = fetchedResults;

  const handleBack = () => {
    navigate(-1);
  };

  if (loading || !userDetails) {
    return <UserDetailsLoading />;
  }

  return (
    <Container
      maxWidth="md"
      style={{ minHeight: "100vh", marginTop: "2rem", position: "relative" }}
    >
      <IconButton
        onClick={handleBack}
        sx={{
          position: "absolute",
          left: "0.5rem",
          top: "0.5rem",
          color: "#757575",
        }}
      >
        <ArrowBack />
      </IconButton>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item sx={{ marginBottom: "1rem" }}>
          <ImageShimmer
            width={180}
            height={180}
            imageUrl={userDetails.avatar_url}
            alt={userDetails.login}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={8} justifyContent={"center"}>
          <Paper variant="outlined" sx={{ padding: "1rem" }}>
            <Typography variant="h5" gutterBottom>
              {userDetails.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {userDetails.login}
            </Typography>
            <Divider sx={{ marginBottom: "0.5rem" }} />
            <Grid
              container
              spacing={1}
              justifyContent={"space-between"}
              paddingLeft={1}
            >
              {Object.entries(userDetailIcons).map(([key, icon]) =>
                userDetails[key] ? (
                  <UserDetailItem
                    key={key}
                    label={key}
                    value={userDetails[key]}
                    icon={icon}
                    fullwidth={fullWidthKeys.includes(key)}
                  />
                ) : null
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDetails;
