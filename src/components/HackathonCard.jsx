import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const HackathonCard = ({ hackathon, onViewDetails }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{hackathon.name}</h3>
          <span className={`px-2 py-1 text-xs rounded-full ${
            hackathon.status === 'Active' ? 'bg-green-100 text-green-800' :
            hackathon.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
            hackathon.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {hackathon.status}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-4">Created: {hackathon.dateCreated}</p>
        <div className="flex justify-between">
          <button
            onClick={() => onViewDetails(hackathon)}
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center gap-1"
          >
            View Details <ChevronRight size={16} />
          </button>
          <button className="text-gray-600 hover:text-gray-800 text-sm font-medium flex items-center gap-1">
            Manage <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HackathonCard;