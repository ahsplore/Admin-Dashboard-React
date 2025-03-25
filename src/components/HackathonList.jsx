import HackathonCard from './HackathonCard';

const HackathonList = ({ hackathons, onViewDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {hackathons.map((hackathon) => (
        <HackathonCard 
          key={hackathon.id} 
          hackathon={hackathon} 
          onViewDetails={onViewDetails} 
        />
      ))}
    </div>
  );
};

export default HackathonList;