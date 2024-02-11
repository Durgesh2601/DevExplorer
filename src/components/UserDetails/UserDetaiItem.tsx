import React from "react";
import { Grid, Typography } from "@mui/material";
import { UserDetailItemProps } from "../../types";
import { extraLabelsKeysMap, renderExtraLabelKeys } from "../../constants";

const UserDetailItem: React.FC<UserDetailItemProps> = ({
  value,
  icon,
  label,
  fullwidth,
}) => {
  const showExtraLabel = renderExtraLabelKeys.includes(label);
  return (
    <Grid item xs={12} sm={fullwidth ? 12 : 5} md={fullwidth ? 12 : 5}>
      {icon}
      <Typography
        variant="body2"
        component="span"
        sx={{ verticalAlign: "top", marginLeft: "0.5rem" }}
      >
        {value}{" "}
        {showExtraLabel &&
          extraLabelsKeysMap[label as keyof typeof extraLabelsKeysMap]}
      </Typography>
    </Grid>
  );
};

export default UserDetailItem;
