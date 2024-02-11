import {
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";

const UserListLoading = () => {
  return (
    <>
      <ListItemAvatar>
        <Skeleton variant="circular" width={80} height={80} />
      </ListItemAvatar>
      <ListItemText
        primary={<Skeleton variant="text" width="60%" />}
        secondary={<Skeleton variant="text" width="50%" />}
        sx={{ marginLeft: "1rem" }}
      />
      <Skeleton variant="circular" width={24} height={24} />
      <Typography variant="body2" sx={{ minWidth: "3rem", marginLeft: "1rem" }}>
        <Skeleton variant="text" width="100%" />
      </Typography>
    </>
  );
};

export default UserListLoading;
