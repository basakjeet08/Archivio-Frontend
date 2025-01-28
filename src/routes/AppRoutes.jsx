import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import MainLayout from "../layouts/MainLayout";
import LibraryPage from "../pages/LibraryPage";
import HistoryPage from "../pages/HistoryPage";
import AvailabilityPage from "../pages/AvailabilityPage";
import BooksLentPage from "../pages/BooksLentPage";

// Routes for all the different screens
export const HOME_ROUTE = "/";
export const LOGIN_ROUTE = "/login";
export const REGISTER_ROUTE = "/register";
export const DASHBOARD_ROUTE = "/dashboard";
export const LIBRARY_ROUTE = "/library";
export const HISTORY_ROUTE = "/history";
export const AVAILABILITY_ROUTE = "/availability";
export const BOOKS_LENT_ROUTE = "/books-lent";

// This function checks if the user is authenticated or not !!
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

// This is the wrapper for all the public Routes
const PublicRoutes = () => {
  return !isAuthenticated() ? <Outlet /> : <Navigate to={DASHBOARD_ROUTE} />;
};

// This is the wrapper for all the private Routes
const PrivateRoutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to={LOGIN_ROUTE} />;
};

const AppRoutes = () => {
  return (
    // Mandatory
    <BrowserRouter>
      {/* Routes are added under this */}
      <Routes>
        {/* Wrapping all the Public Routes under the Public JSX */}
        <Route element={<PublicRoutes />}>
          <Route index element={<HomePage />} />
          <Route path={LOGIN_ROUTE} element={<LoginPage />} />
          <Route path={REGISTER_ROUTE} element={<RegisterPage />} />
        </Route>

        {/* Wrapping the Private Routes under the prvate JSX */}
        <Route element={<PrivateRoutes />}>
          <Route element={<MainLayout />}>
            <Route path={DASHBOARD_ROUTE} element={<DashboardPage />} />
            <Route path={LIBRARY_ROUTE} element={<LibraryPage />} />
            <Route path={HISTORY_ROUTE} element={<HistoryPage />} />
            <Route path={AVAILABILITY_ROUTE} element={<AvailabilityPage />} />
            <Route path={BOOKS_LENT_ROUTE} element={<BooksLentPage />} />
          </Route>
        </Route>

        {/* Root Layout to show Error Pages */}
        <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
