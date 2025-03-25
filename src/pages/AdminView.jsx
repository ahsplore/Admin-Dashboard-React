import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import StatCard from '../components/StatCard';
import { Zap, FileText, Code, Award, CheckCircle, Users } from 'lucide-react';

const AdminView = () => {
  return (
    <div className='flex-1 overflow-auto relative'>
      <Header title='Overview' />
      <div className='flex-1 p-8 overflow-y-auto bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen relative'>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 relative z-0'
        >
          <StatCard name='Total Participants' icon={Users} value='450' bgColor='#2596be' />
          <StatCard name='PPT Submissions' icon={FileText} value='320' color='#fff' bgColor='#10B981' />
          <StatCard name='Ongoing Hackathons' icon={Code} value='2' color='#fff' bgColor='#ea6979' />
          <StatCard name='Certificates Issued' icon={Award} value='180' color='#fff' bgColor='#6660d9' />
          <StatCard name='Evaluation Completed' icon={CheckCircle} value='75%' color='#fff' bgColor='#e28743' />
          <StatCard name='Panelists Engaged' icon={Zap} value='10' color='#fff' bgColor='#154c79' />
        </motion.div>
      </div>
    </div>
  );
};

export default AdminView;
