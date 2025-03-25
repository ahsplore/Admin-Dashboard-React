import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const CreateHackathonForm = ({ 
  newHackathon, 
  setNewHackathon, 
  onCancel, 
  onCreate,
  onAddCriterion,
  onCriterionChange,
  onRemoveCriterion
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mb-8 p-6 bg-white rounded-xl shadow-md border border-gray-200"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Create New Hackathon</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Hackathon Name</label>
          <input
            type="text"
            value={newHackathon.name}
            onChange={(e) => setNewHackathon({...newHackathon, name: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter hackathon name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Participation Mode</label>
          <select
            value={newHackathon.participationMode}
            onChange={(e) => setNewHackathon({...newHackathon, participationMode: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Team">Team</option>
            <option value="Individual">Individual</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
          <input
            type="date"
            value={newHackathon.startDate}
            onChange={(e) => setNewHackathon({...newHackathon, startDate: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
          <input
            type="date"
            value={newHackathon.endDate}
            onChange={(e) => setNewHackathon({...newHackathon, endDate: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Rounds</label>
          <input
            type="number"
            min="1"
            value={newHackathon.rounds}
            onChange={(e) => setNewHackathon({...newHackathon, rounds: parseInt(e.target.value)})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Evaluation Criteria</label>
          <div className="space-y-2">
            {newHackathon.criteria.map((criterion, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={criterion}
                  onChange={(e) => onCriterionChange(index, e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Criterion"
                />
                <button
                  type="button"
                  onClick={() => onRemoveCriterion(index)}
                  className="px-2 py-1 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={onAddCriterion}
              className="mt-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm"
            >
              Add Criterion
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onCreate}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          disabled={!newHackathon.name || !newHackathon.startDate || !newHackathon.endDate}
        >
          Create Hackathon
        </button>
      </div>
    </motion.div>
  );
};

export default CreateHackathonForm;