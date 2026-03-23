import React, { useState } from "react";

const Profile = () => {
  const PROFILE_STORAGE_KEY = "b2b.profile.demo.v1";

  const profileSeed = {
    companyName: "Grocery Store",
    emailAddress: "joshuadbass@rhyta.com",
    countryRegion: "107 Veltri Drive",
    yearEstablished: "2022",
    totalEmployees: "154-360 People",
    category: "Grocery",
    streetAddress: "234 High St",
    cityState: "107 Veltri Drive",
    zip: "B23 6SN",
  };

  const profileFields = [
    { key: "companyName", label: "Company Name :" },
    { key: "emailAddress", label: "Email Address :" },
    { key: "countryRegion", label: "Country / Region :" },
    { key: "yearEstablished", label: "Year Established :" },
    { key: "totalEmployees", label: "Total Employees :" },
    { key: "category", label: "Category :" },
    { key: "streetAddress", label: "Street Address :" },
    { key: "cityState", label: "City / State :" },
    { key: "zip", label: "Zip :" },
  ];

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(() => {
    if (typeof window === "undefined") return profileSeed;
    try {
      const raw = window.localStorage.getItem(PROFILE_STORAGE_KEY);
      if (!raw) return profileSeed;
      const parsed = JSON.parse(raw);
      return { ...profileSeed, ...(parsed || {}) };
    } catch {
      return profileSeed;
    }
  });

  const [draft, setDraft] = useState(profile);

  const startEdit = () => {
    setDraft(profile);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setDraft(profile);
    setIsEditing(false);
  };

  const saveEdit = () => {
    const next = { ...draft };
    setProfile(next);
    setIsEditing(false);

    try {
      window.localStorage.setItem(
        PROFILE_STORAGE_KEY,
        JSON.stringify(next)
      );
    } catch {
      // Ignore localStorage errors
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 min-h-[600px]">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-px w-12 bg-[#FA6C48]" />
          {/* Decorative Leaf Icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FA6C48"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1.8 9.2a7 7 0 0 1-9.8 8.8Z" />
            <path d="M11 20v-5.5m0 0L13.5 12M11 14.5 8.5 12" />
          </svg>
          <div className="h-px w-12 bg-[#FA6C48]" />
        </div>
      </div>

      {/* Profile Details Card */}
      <div className="bg-[#f9f9f9] rounded-xl p-8 border border-gray-50 relative">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-lg font-bold text-gray-800">
            {profile.companyName || "Profile Name"}
          </h3>

          {!isEditing ? (
            <button
              type="button"
              onClick={startEdit}
              className="bg-[#FA6C48] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FA6C48]/90 transition-colors"
            >
              Edit Profile
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={saveEdit}
                className="bg-[#FA6C48] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FA6C48]/90 transition-colors"
              >
                Save
              </button>
              <button
                type="button"
                onClick={cancelEdit}
                className="bg-white text-gray-700 px-4 py-2 rounded-md text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-y-4">
          {profileFields.map((item) => (
            <div
              key={item.key}
              className="flex items-center border-b border-gray-100 pb-3 last:border-0"
            >
              <span className="w-1/3 text-gray-700 font-medium">
                {item.label}
              </span>
              <span className="w-2/3 text-gray-600">
                {isEditing ? (
                  <input
                    type="text"
                    value={draft[item.key] ?? ""}
                    onChange={(e) =>
                      setDraft((d) => ({
                        ...d,
                        [item.key]: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 rounded-md border border-gray-200 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6C48]/30"
                  />
                ) : (
                  profile[item.key]
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
