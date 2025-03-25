import React, { useState, useEffect, useRef } from "react";
import { Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AdminNotifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    "New message from John",
    "System update available",
    "Meeting at 3 PM",
  ]); 
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={notificationRef}>
      <div className="relative">
        <Bell
          className="w-6 h-6 text-gray-300 cursor-pointer hover:text-gray-100 transition-transform duration-200 ease-in-out hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        />
        {notifications.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-bounce">
            {notifications.length}
          </span>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute right-0 top-12 bg-gray-800 text-white shadow-2xl rounded-lg w-72 p-4 z-50"
        >
        
            <h3 className="text-lg font-semibold mb-3">Notifications</h3>
            {notifications.length > 0 ? (
              <div className="space-y-2">
                {notifications.map((note, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm py-2 px-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                  >
                    {note}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">No new notifications</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminNotifications;
