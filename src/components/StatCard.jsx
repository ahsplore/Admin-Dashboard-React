import React from 'react'
import { motion } from 'framer-motion'

const StatCard = ({name, icon:Icon, value, color, bgColor}) => {
  return (
    
    <motion.div
        className='bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounder-xl border border-0'
        whileHover={{y:-5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5"}}
        style={{ backgroundColor: bgColor }}
    >
        <div className="px-4 py-5 sm:p-6">
            <span className="flex items-center text-sm font-medium text-white">
                <Icon size={20} className='mr-2' style={{color}} />
                {name}
            </span>
            <p className="mt-1 text-3xl font-semibold text-gray-100">{value}</p>
        </div>
    </motion.div>
  )
}

export default StatCard
