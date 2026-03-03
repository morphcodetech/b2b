import React from "react";

const ProfileInfo = ({ name, email }) => (
  <div className="pt-12 pb-4 text-center px-6">
    <h2 className="text-lg font-bold text-gray-900 tracking-tight">{name}</h2>
    <p className="text-sm text-gray-500 mt-0.5">{email}</p>
  </div>
);

export default ProfileInfo;
