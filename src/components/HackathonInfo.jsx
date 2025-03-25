const HackathonInfo = ({ hackathon }) => {
    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Dates</h3>
          <p className="text-gray-900">
            {hackathon.startDate} to {hackathon.endDate}
          </p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500">Participation Mode</h3>
          <p className="text-gray-900">{hackathon.participationMode}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500">Rounds</h3>
          <p className="text-gray-900">{hackathon.rounds}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500">Evaluation Criteria</h3>
          <ul className="list-disc list-inside text-gray-900">
            {hackathon.criteria.map((criterion, index) => (
              <li key={index}>{criterion}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default HackathonInfo;