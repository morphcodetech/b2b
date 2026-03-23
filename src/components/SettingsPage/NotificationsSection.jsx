import React, { useState } from "react";
import SettingRadioGroup from "./SettingRadioGroup";

const notificationOptions = [
  "Show Desktop Notifications",
  "Enable Notifications",
  "Get notification for my own activity",
  "DND",
];

const NotificationsSection = () => {
  const [selected, setSelected] = useState("Show Desktop Notifications");

  return (
    <div className="pb-8 border-b border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-5">
        Notifications
      </h2>
      <SettingRadioGroup
        name="notifications"
        options={notificationOptions}
        selected={selected}
        onChange={setSelected}
      />
      <button className="mt-6 px-6 py-2.5 bg-[#0fa488] hover:bg-[#0c8f76] text-white text-sm font-semibold rounded-lg transition-colors">
        Save Changes
      </button>
    </div>
  );
};

export default NotificationsSection;
