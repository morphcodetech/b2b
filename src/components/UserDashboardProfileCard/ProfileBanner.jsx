import React from "react";
import profilebanner from "../../assets/profile-banner.jpg";

const ProfileBanner = () => (
  <div className="relative h-32 w-full rounded-t-2xl overflow-hidden">
    <img
      src={profilebanner}
      alt="Banner"
      className="w-full h-full object-cover"
    />
  </div>
);

export default ProfileBanner;
