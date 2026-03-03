import React from "react";
import profilepic from "../../assets/profile-pic.png";

const ProfileAvatar = () => (
  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
    <div className="w-20 h-20 rounded-full border-4 border-white bg-white shadow-md overflow-hidden">
      <img
        src={profilepic}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

export default ProfileAvatar;
