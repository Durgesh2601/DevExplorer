import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import customTheme from "./theme";
import PageHeader from "./components/PageHeader/PageHeader";
import HomePage from "./pages/Homepage";
import UserDetailPage from "./pages/UserDetailPage";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <PageHeader />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:username" element={<UserDetailPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
