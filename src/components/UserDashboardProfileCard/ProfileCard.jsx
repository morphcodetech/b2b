import React, { useState } from "react";
import ProfileBanner from "./ProfileBanner";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";
import NavMenu from "./NavMenu";

const ProfileCard = () => {
  const PROFILE_STORAGE_KEY = "b2b.profile.demo.v1";

  const seed = {
    companyName: "Joshua D. Bass",
    emailAddress: "joshuadbass@rhyta.com",
  };

  const [profile] = useState(() => {
    if (typeof window === "undefined") return seed;
    try {
      const raw = window.localStorage.getItem(PROFILE_STORAGE_KEY);
      if (!raw) return seed;
      const parsed = JSON.parse(raw);
      return { ...seed, ...(parsed || {}) };
    } catch {
      return seed;
    }
  });

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="relative">
        <ProfileBanner />
        <ProfileAvatar />
      </div>
      <ProfileInfo
        name={profile.companyName || seed.companyName}
        email={profile.emailAddress || seed.emailAddress}
      />
      <div className="mx-5 border-t border-gray-200" />
      <NavMenu />
    </div>
  );
};

export default ProfileCard;
