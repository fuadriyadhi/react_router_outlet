import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import Dashboard from "./pages/Dashboard";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<h1>Dashboard</h1>} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Route>
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
}
