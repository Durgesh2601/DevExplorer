import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import customTheme from "./theme";
import UserListPage from "./components/UsersList/UserListPage";
import UserDetailsPage from "./components/UserDetails/UserDetailsPage";
import PageHeader from "./components/PageHeader/PageHeader";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <PageHeader />
      <Router>
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route path="/:username" element={<UserDetailsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
