import React from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { UserData, UserListItem } from "../../types";
import useFetchUserData from "../../customHooks";

const UserItem: React.FC<{ user: UserListItem }> = ({ user }) => {
  const userData: UserData | null = useFetchUserData(user?.url);
  console.log(userData, "userData");
  return (
    <Grid item xs={12} sm={5} md={5}>
      <ListItem
        component={Link}
        to={`/${userData?.login}`}
        sx={{
          border: "1px solid #4b5563",
          padding: "1rem",
          textAlign: "center",
          borderRadius: "8px",
          color: "inherit",
        }}
      >
        <ListItemAvatar>
          <Avatar
            src={userData?.avatar_url}
            alt={userData?.login}
            sx={{
              height: "80px",
              width: "80px",
            }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={`${userData?.name}` ?? ""}
          secondary={`${userData?.login ?? ""}`}
          secondaryTypographyProps={{
            variant: "body2",
            color: "text.secondary",
          }}
        />
        <LocationOnIcon sx={{ color: pink[500] }} />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ minWidth: "3rem" }}
        >
          {userData?.location ?? "----"}
        </Typography>
      </ListItem>
    </Grid>
  );
};

export default UserItem;
