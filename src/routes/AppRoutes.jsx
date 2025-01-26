import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import CreateLibraryPage from "../pages/CreateLibraryPage";

const AppRoutes = () => {
  return (
    // Mandatory
    <BrowserRouter>
      {/* Routes are added under this */}
      <Routes>
        {/* Home Page Route Added */}
        <Route index path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-library" element={<CreateLibraryPage />} />

        {/* Root Layout to show Error Pages */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
