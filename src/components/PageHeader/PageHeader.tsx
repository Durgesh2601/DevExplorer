import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const PageHeader = () => {
  return (
    <AppBar position="static" sx={{ background: "#1c2128" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          DevExplorer
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="github"
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;
