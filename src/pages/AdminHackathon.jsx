import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ChevronRight, PieChart, BarChart2, LineChart, Users, Award } from 'lucide-react';
import HackathonList from '../components/HackathonList';
import CreateHackathonForm from '../components/CreateHackthonForm';
import HackathonFilters from '../components/HackathonFilters';
import TeamTable from '../components/TeamTable';
import HackathonInfo from '../components/HackathonInfo';
import StatsCard from '../components/StatsCard';
import Header from '../components/Header';

// Import dummy data
import { dummyHackathons } from '../db/dummyHackthons';

const AdminHackathon = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [hackathons, setHackathons] = useState(dummyHackathons);
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [filters, setFilters] = useState({
    status: 'All',
    category: 'All',
    sortBy: 'dateCreated'
  });

  const [newHackathon, setNewHackathon] = useState({
    name: '',
    startDate: '',
    endDate: '',
    rounds: 1,
    participationMode: 'Team',
    criteria: []
  });

  const filteredHackathons = hackathons.filter(hackathon => {
    if (filters.status !== 'All' && hackathon.status !== filters.status) return false;
    if (filters.category !== 'All' && hackathon.category !== filters.category) return false;
    return true;
  }).sort((a, b) => {
    if (filters.sortBy === 'dateCreated') {
      return new Date(b.dateCreated) - new Date(a.dateCreated);
    } else if (filters.sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const recentHackathons = filteredHackathons.slice(0, 4);

  const handleCreateHackathon = () => {
    const newHack = {
      id: hackathons.length + 1,
      name: newHackathon.name,
      dateCreated: new Date().toISOString().split('T')[0],
      status: 'Upcoming',
      category: 'Tech',
      startDate: newHackathon.startDate,
      endDate: newHackathon.endDate,
      rounds: newHackathon.rounds,
      participationMode: newHackathon.participationMode,
      criteria: newHackathon.criteria,
      teams: []
    };
    
    setHackathons([newHack, ...hackathons]);
    setNewHackathon({
      name: '',
      startDate: '',
      endDate: '',
      rounds: 1,
      participationMode: 'Team',
      criteria: []
    });
    setShowCreateForm(false);
  };

  const handleAddCriterion = () => {
    setNewHackathon({
      ...newHackathon,
      criteria: [...newHackathon.criteria, '']
    });
  };

  const handleCriterionChange = (index, value) => {
    const newCriteria = [...newHackathon.criteria];
    newCriteria[index] = value;
    setNewHackathon({
      ...newHackathon,
      criteria: newCriteria
    });
  };

  const handleRemoveCriterion = (index) => {
    const newCriteria = [...newHackathon.criteria];
    newCriteria.splice(index, 1);
    setNewHackathon({
      ...newHackathon,
      criteria: newCriteria
    });
  };

  return (
    
    <div className="flex-1 overflow-auto relative">
      <Header title="Hackathon Management" />
      <div className="p-8 overflow-y-auto bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen relative">
        {!selectedHackathon ? (
        <>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Recent Hackathons</h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCreateForm(true)}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition-colors"
            >
              <Plus size={18} />
              Create Hackathon
            </motion.button>
          </div>

          <AnimatePresence>
            {showCreateForm && (
              <CreateHackathonForm
                newHackathon={newHackathon}
                setNewHackathon={setNewHackathon}
                onCancel={() => setShowCreateForm(false)}
                onCreate={handleCreateHackathon}
                onAddCriterion={handleAddCriterion}
                onCriterionChange={handleCriterionChange}
                onRemoveCriterion={handleRemoveCriterion}
              />
            )}
          </AnimatePresence>

          <HackathonFilters filters={filters} setFilters={setFilters} />

          <HackathonList 
            hackathons={recentHackathons} 
            onViewDetails={setSelectedHackathon} 
          />

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Hackathon Management Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Users size={18} className="text-indigo-500" /> Team Dashboard
                </h3>
                <p className="text-gray-600 text-sm">
                  View registered participants & teams, track progress & milestones, and see real-time updates on submissions.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Award size={18} className="text-indigo-500" /> Submissions & Evaluation
                </h3>
                <p className="text-gray-600 text-sm">
                  Teams can submit various materials, automatic deadline enforcement, and dynamic leaderboard based on evaluation scores.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="flex items-center mb-6">
            <button 
              onClick={() => setSelectedHackathon(null)}
              className="mr-4 text-gray-500 hover:text-gray-700"
            >
              <ChevronRight size={20} className="rotate-180" />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">{selectedHackathon.name}</h1>
            <span className={`ml-4 px-3 py-1 text-sm rounded-full ${
              selectedHackathon.status === 'Active' ? 'bg-green-100 text-green-800' :
              selectedHackathon.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
              selectedHackathon.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {selectedHackathon.status}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Teams & Submissions</h2>
              <TeamTable hackathon={selectedHackathon} />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Hackathon Details</h2>
              <HackathonInfo hackathon={selectedHackathon} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard title="Participation" icon={PieChart}>
              <div className="text-center  text-gray-600">
                <div className="w-32 h-32 rounded-full border-8 border-indigo-100 relative mx-auto mb-4">
                  <div 
                    className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-indigo-500 clip-path-pie"
                    style={{ '--percentage': '75%' }}
                  ></div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
                    <span className="text-sm">Registered: 45</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Submitted Ideation: 32</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm">Submitted Final: 18</span>
                  </div>
                </div>
              </div>
            </StatsCard>

            <StatsCard title="Progress" icon={BarChart2} >
              <div className="w-full  text-gray-600">
                <div className="flex items-end h-40 gap-2 justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-yellow-400 rounded-t" style={{ height: '30%' }}></div>
                    <span className="text-xs mt-1">Not Started</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-blue-400 rounded-t" style={{ height: '60%' }}></div>
                    <span className="text-xs mt-1">In Progress</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-green-400 rounded-t" style={{ height: '40%' }}></div>
                    <span className="text-xs mt-1">Completed</span>
                  </div>
                </div>
                <div className="text-center mt-4 text-sm text-gray-600">
                  Team progress across different stages
                </div>
              </div>
            </StatsCard>

            <StatsCard title="Scores Distribution" icon={LineChart}>
              <div className="w-full  text-gray-600">
                <div className="relative h-40">
                  <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200"></div>
                  <div className="absolute bottom-0 left-0 w-1/4">
                    <div className="h-16 bg-indigo-100 mx-2 rounded-t"></div>
                    <div className="text-xs text-center mt-1">60-70</div>
                  </div>
                  <div className="absolute bottom-0 left-1/4 w-1/4">
                    <div className="h-24 bg-indigo-200 mx-2 rounded-t"></div>
                    <div className="text-xs text-center mt-1">70-80</div>
                  </div>
                  <div className="absolute bottom-0 left-2/4 w-1/4">
                    <div className="h-32 bg-indigo-300 mx-2 rounded-t"></div>
                    <div className="text-xs text-center mt-1">80-90</div>
                  </div>
                  <div className="absolute bottom-0 left-3/4 w-1/4">
                    <div className="h-20 bg-indigo-400 mx-2 rounded-t"></div>
                    <div className="text-xs text-center mt-1">90-100</div>
                  </div>
                </div>
                <div className="text-center mt-4 text-sm text-gray-600">
                  Distribution of team evaluation scores
                </div>
              </div>
            </StatsCard>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Hackathon Management Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Users size={18} className="text-indigo-500" /> Team Dashboard
                </h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span>✅</span> View registered participants & teams
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✅</span> Track progress & milestones (Idea → Prototype → Final)
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✅</span> See real-time updates on submissions
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Award size={18} className="text-indigo-500" /> Submissions & Evaluation
                </h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span>✅</span> Teams can submit PPTs, project links, GitHub repos
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✅</span> Automatic deadline enforcement
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✅</span> View & download team submissions directly
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✅</span> Dynamic leaderboard based on evaluation scores
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default AdminHackathon;