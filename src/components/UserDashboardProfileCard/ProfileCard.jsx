import React from "react";
import ProfileBanner from "./ProfileBanner";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";
import NavMenu from "./NavMenu";

const ProfileCard = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="relative">
        <ProfileBanner />
        <ProfileAvatar />
      </div>
      <ProfileInfo name="Joshua D. Bass" email="joshuadbass@rhyta.com" />
      <div className="mx-5 border-t border-gray-200" />
      <NavMenu />
    </div>
  );
};

export default ProfileCard;
