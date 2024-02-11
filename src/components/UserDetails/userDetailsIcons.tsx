import {
  LocationOn,
  PeopleAlt,
  Visibility,
  HowToReg,
  MailOutline,
  Business,
  X,
} from "@mui/icons-material";
import { blue, lightGreen, pink, teal } from "@mui/material/colors";
import { UserDetailIcons } from "../../types";

const userDetailIcons: UserDetailIcons = {
  company: <Business sx={{ color: teal[500] }} />,
  location: <LocationOn sx={{ color: pink[500] }} />,
  email: <MailOutline sx={{ color: blue[500] }} />,
  followers: <PeopleAlt sx={{ color: blue[500] }} />,
  following: <HowToReg sx={{ color: blue[500] }} />,
  public_repos: <Visibility sx={{ color: lightGreen[500] }} />,
  twitter_username: <X />,
};

export default userDetailIcons;
