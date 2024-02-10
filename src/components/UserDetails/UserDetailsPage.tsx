import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Avatar,
  Typography,
  Grid,
  Container,
  CircularProgress,
  Paper,
  IconButton,
  Divider,
} from "@mui/material";
import {
  ArrowBack,
  LocationOn,
  PeopleAlt,
  Visibility,
  HowToReg,
  MailOutline,
  X,
} from "@mui/icons-material";
import { blue, lightGreen, pink } from "@mui/material/colors";
import useFetchUserData from "../../customHooks";
import { FetchUserDataResult } from "../../types";

const UserDetailsPage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();

  const fetchedResults: FetchUserDataResult | null = useFetchUserData(
    username ?? ""
  );

  if (!fetchedResults) {
    return <CircularProgress />;
  }

  const { userDetails, loading } = fetchedResults;

  if (loading || !userDetails) {
    return <CircularProgress />;
  }

  const handleBack = () => {
    navigate(-1);
  };

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
          <Avatar
            src={userDetails.avatar_url}
            alt={userDetails.login}
            sx={{ width: 180, height: 180 }}
          />
        </Grid>
        <Grid item>
          <Paper
            variant="outlined"
            style={{ padding: "1.3rem", maxWidth: "32rem" }}
          >
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
              alignItems={"center"}
            >
              <Grid item xs={12} sm={5} md={5}>
                <LocationOn sx={{ color: pink[500] }} />
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ verticalAlign: "top", marginLeft: "0.5rem" }}
                >
                  {userDetails.location || "--"}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5} md={5}>
                <MailOutline sx={{ color: blue[500] }} />
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ verticalAlign: "top", marginLeft: "0.5rem" }}
                >
                  {userDetails.email}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5} md={5}>
                <PeopleAlt sx={{ color: blue[500] }} />
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ verticalAlign: "top", marginLeft: "0.5rem" }}
                >
                  {userDetails.followers} followers
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5} md={5}>
                <HowToReg sx={{ color: blue[500] }} />
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ verticalAlign: "top", marginLeft: "0.5rem" }}
                >
                  {userDetails.following} following
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5} md={5}>
                <Visibility sx={{ color: lightGreen[500] }} />
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ verticalAlign: "top", marginLeft: "0.5rem" }}
                >
                  {userDetails.public_repos} public repos
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5} md={5}>
                <X />
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ verticalAlign: "top", marginLeft: "0.5rem" }}
                >
                  @{userDetails.twitter_username}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDetailsPage;
