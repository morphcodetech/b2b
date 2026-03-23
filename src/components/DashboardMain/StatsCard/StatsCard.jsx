import React from "react";

const StatsCardShell = ({ children }) => (
  <div className="flex-1 bg-white rounded-xl border border-gray-200 px-6 py-5 flex items-center gap-4 relative overflow-hidden">
    {children}
  </div>
);

const StatsCardFaintIcon = ({ icon }) => (
  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10 text-[#FA6C48]">
    {icon}
  </div>
);

const StatsCardIcon = ({ icon }) => (
  <div className="text-[#FA6C48] shrink-0">{icon}</div>
);

const StatsCardText = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500 font-medium">{label}</p>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
  </div>
);

const StatsCard = ({ icon, label, value }) => (
  <StatsCardShell>
    <StatsCardFaintIcon icon={icon} />
    <StatsCardIcon icon={icon} />
    <StatsCardText label={label} value={value} />
  </StatsCardShell>
);

export default StatsCard;
