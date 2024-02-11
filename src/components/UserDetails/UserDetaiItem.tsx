import React from "react";
import { Grid, Typography } from "@mui/material";
import { UserDetailItemProps } from "../../types";
import {
  extraLabelsKeysMap,
  hyperLinksMap,
  renderExtraLabelKeys,
} from "../../constants";
import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";

const UserDetailItem: React.FC<UserDetailItemProps> = ({
  value,
  icon,
  label,
  fullwidth,
}) => {
  const showExtraLabel = renderExtraLabelKeys.includes(label);
  const hyperlink = hyperLinksMap[label as keyof typeof hyperLinksMap];

  const linkTo = hyperlink && value ? `${hyperlink}${value}` : "#";
  return (
    <Grid item xs={12} sm={fullwidth ? 12 : 5} md={fullwidth ? 12 : 5}>
      <Link
        to={linkTo}
        style={{
          textDecoration: "none",
          color: hyperlink ? blue[500] : "inherit",
        }}
      >
        {icon}
        <Typography
          variant="body2"
          component="span"
          sx={{
            verticalAlign: "top",
            marginLeft: "0.5rem",
          }}
        >
          {value ?? "--"}{" "}
          {showExtraLabel &&
            extraLabelsKeysMap[label as keyof typeof extraLabelsKeysMap]}
        </Typography>
      </Link>
    </Grid>
  );
};

export default UserDetailItem;
