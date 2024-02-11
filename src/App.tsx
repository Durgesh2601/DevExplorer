import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { UserProvider } from "./context/UserDataContext";
import customTheme from "./theme";
import PageHeader from "./components/PageHeader/PageHeader";
import HomePage from "./pages/Homepage";
import UserDetailPage from "./pages/UserDetailPage";
import ErrorBoundary from "./components/ErrorBoundary";
import Fallback from "./components/FallbackComponent";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <PageHeader />
      <ErrorBoundary fallback={<Fallback />}>
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:username" element={<UserDetailPage />} />
            </Routes>
          </Router>
        </UserProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
