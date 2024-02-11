import { Container, Grid, Paper, Skeleton, Divider } from "@mui/material";

const UserDetailsLoading = () => {
  return (
    <Container
      maxWidth="md"
      style={{ minHeight: "100vh", marginTop: "2rem", position: "relative" }}
    >
      <Skeleton
        variant="circular"
        width={40}
        height={40}
        style={{ position: "absolute", left: "0.5rem", top: "0.5rem" }}
      />

      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {/* User Avatar Skeleton */}
        <Grid item sx={{ marginBottom: "1rem" }}>
          <Skeleton variant="circular" width={180} height={180} />
        </Grid>

        {/* User Name and Login Skeleton */}
        <Grid item xs={12} sm={12} md={8} justifyContent={"center"}>
          <Paper
            variant="outlined"
            style={{ padding: "1rem", minWidth: "20rem" }}
          >
            <Skeleton width="60%" height={32} />
            <Skeleton
              width="40%"
              height={24}
              style={{ marginBottom: "0.5rem" }}
            />

            {/* Divider */}
            <Divider sx={{ marginY: "0.5rem" }} />

            {/* User Detail Items Skeletons */}
            <Grid
              container
              spacing={1}
              sx={{ minWidth: "25rem" }}
              justifyContent={"space-between"}
            >
              {[...Array(5)].map((_, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Skeleton width="80%" height={20} />
                  <Skeleton width="60%" height={20} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDetailsLoading;
