import React from "react";

const Profile = () => {
  const profileData = [
    { label: "Company Name :", value: "Grocery Store" },
    { label: "Email Address :", value: "joshuadbass@rhyta.com" },
    { label: "Country / Region :", value: "107 Veltri Drive" },
    { label: "Year Established :", value: "2022" },
    { label: "Total Employees :", value: "154-360 People" },
    { label: "Category :", value: "Grocery" },
    { label: "Street Address :", value: "234 High St" },
    { label: "City / State :", value: "107 Veltri Drive" },
    { label: "Zip :", value: "B23 6SN" },
  ];

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 min-h-[600px]">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-px w-12 bg-[#0fa488]" />
          {/* Decorative Leaf Icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0fa488"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1.8 9.2a7 7 0 0 1-9.8 8.8Z" />
            <path d="M11 20v-5.5m0 0L13.5 12M11 14.5 8.5 12" />
          </svg>
          <div className="h-px w-12 bg-[#0fa488]" />
        </div>
      </div>

      {/* Profile Details Card */}
      <div className="bg-[#f9f9f9] rounded-xl p-8 border border-gray-50 relative">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-lg font-bold text-gray-800">Profile Name</h3>
          <button className="bg-[#0fa488] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#0d8a73] transition-colors">
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 gap-y-4">
          {profileData.map((item, index) => (
            <div
              key={index}
              className="flex items-center border-b border-gray-100 pb-3 last:border-0"
            >
              <span className="w-1/3 text-gray-700 font-medium">
                {item.label}
              </span>
              <span className="w-2/3 text-gray-600">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
