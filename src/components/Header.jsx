import React from "react";
import { Mail, CircleUser } from "lucide-react";
import AdminNotifications from "./AdminNotification";

const Header = ({ title }) => {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700 relative z-50">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>
        <div className="flex items-center space-x-4 text-gray-100">
          <Mail className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          <AdminNotifications />
          <CircleUser className="w-6 h-6 cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </header>
  );
};

export default Header;
