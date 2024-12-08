import React from 'react';
import { Navigate } from 'react-router-dom';
import UserStore from "../store/UserStore.js";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" />; // Redirect to login if no token
    }

    return children;
};

export default ProtectedRoute;