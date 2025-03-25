const StatsCard = ({ title, icon: Icon, children }) => {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <Icon size={20} className="text-indigo-500" />
        </div>
        <div className="h-64 flex items-center justify-center">
          {children}
        </div>
      </div>
    );
  };
  
  export default StatsCard;