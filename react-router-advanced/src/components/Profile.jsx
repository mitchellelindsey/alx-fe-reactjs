import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// Define nested components here
const ProfileDetails = () => (
  <div className="mt-6 text-center">
    <h2 className="text-xl font-semibold text-green-600">Profile Details</h2>
    <p className="text-gray-700">Here you can view your account information.</p>
  </div>
);

const ProfileSettings = () => (
  <div className="mt-6 text-center">
    <h2 className="text-xl font-semibold text-orange-600">Profile Settings</h2>
    <p className="text-gray-700">Here you can update your preferences and settings.</p>
  </div>
);

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-purple-600">Profile Page</h1>
      <p className="mt-4 text-gray-700">
        Manage your account details, preferences, and settings here.
      </p>

      {/* Navigation Links */}
      <nav className="mt-4">
        <Link to="details" className="mr-4 text-blue-500">
          Profile Details
        </Link>
        <Link to="settings" className="text-blue-500">
          Profile Settings
        </Link>
      </nav>

      {/* Nested Routes defined here */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
