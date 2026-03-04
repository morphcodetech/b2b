import React from "react";

const StatsCard = ({ icon, label, value }) => {
  return (
    <div className="flex-1 bg-white rounded-xl border border-gray-200 px-6 py-5 flex items-center gap-4 relative overflow-hidden">
      {/* faint bg icon */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10 text-[#0fa488]">
        {icon}
      </div>
      {/* colored icon */}
      <div className="text-[#0fa488] shrink-0">{icon}</div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{label}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
