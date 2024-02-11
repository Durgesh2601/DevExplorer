import React from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { FetchUserDataResult, UserListItem } from "../../types";
import useFetchUserData from "../../customHooks";
import ImageShimmer from "../Shimmer";

const UserItem: React.FC<{ user: UserListItem }> = ({ user }) => {
  const fetchedResults: FetchUserDataResult | null = useFetchUserData(
    user?.login
  );

  if (!fetchedResults) return;

  const { userDetails, loading } = fetchedResults;

  if (loading) return <>Loading...</>;

  return (
    <Grid item xs={12} sm={5} md={5}>
      <ListItem
        component={Link}
        to={`/${userDetails?.login}`}
        sx={{
          border: "1px solid #4b5563",
          padding: "1rem",
          textAlign: "center",
          borderRadius: "8px",
          color: "inherit",
        }}
      >
        <ListItemAvatar>
          <ImageShimmer
            height={80}
            width={80}
            imageUrl={userDetails?.avatar_url ?? ""}
            alt={userDetails?.login ?? ""}
          />
        </ListItemAvatar>
        <ListItemText
          primary={`${userDetails?.name}` ?? ""}
          secondary={`${userDetails?.login ?? ""}`}
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
          {userDetails?.location ?? "----"}
        </Typography>
      </ListItem>
    </Grid>
  );
};

export default UserItem;
