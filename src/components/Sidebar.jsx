import { BarChart2, SquareChevronRight, FileInput, GraduationCap, MonitorCheck, ChartNoAxesCombined, Users, Settings } from "lucide-react";
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const SIDEBAR_ITEMS = [
    {
        name: "Overview",
        icon: BarChart2,
        color: "#6366f1",
        href: "/"
    },
    {
        name: "Hackathon",
        icon: SquareChevronRight,
        color: "#10B981",
        href: "/hackathon-admin"
    },
    {
        name: "PPT Submissions",
        icon: FileInput,
        color: "#7072cf",
        href: "/ppt-admin"
    },
    {
        name: "Certificate",
        icon: GraduationCap,
        color: "#714ebf",
        href: "/certificate-admin"
    },
    {
        name: "Evaluation",
        icon: MonitorCheck,
        color: "#72baa2",
        href: "/evaluation"
    },
    {
        name: "Analytics",
        icon: ChartNoAxesCombined,
        color: "#F59E0B",
        href: "/analytics"
    },
    {
        name: "Panelist",
        icon: Users,
        color: "#3B82F6",
        href: "/panelist"
    },
    {
        name: "Settings",
        icon: Settings,
        color: "#9da1a0",
        href: "/settings"
    }
];


const Sidebar = () => {
    const [sidebarOpen, setSidebaropen] = useState(true);

    return (
        <motion.div
            className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${sidebarOpen ? 'w-64' : 'w-20'}`}
            animate={{ width: sidebarOpen ? 256 : 80 }}
        >
            <div className="h-full bg-gray-800 bg-opacity-50 background-blur-md p-4 flex flex-col border-r border-gray-700">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSidebaropen(!sidebarOpen)}
                    className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
                >
                    <Menu size={24} />
                </motion.button>
                <nav className="mt-8 flex-grow">
                    {SIDEBAR_ITEMS.map(
                        (item) => (
                            <Link key={item.href} to={item.href}>
                                <motion.div
                                    className="flex item-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                                    <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                                    <AnimatePresence>
                                        {sidebarOpen && (
                                            <motion.span className="ml-4 whitespace-nowrap"
                                                initial={{ opacity: 0, width: 0 }}
                                                animate={{ opacity: 1, width: "auto" }}
                                                exit={{ opacity: 0, width: 0 }}
                                                transition={{ duration: 0.2, delay: 0.3 }}
                                            >
                                                {item.name}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </Link>
                        )
                    )
                    }
                </nav>
            </div>
        </motion.div>
    )
}

export default Sidebar