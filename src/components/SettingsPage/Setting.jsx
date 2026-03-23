import React from "react";
import SettingHeader from "./SettingHeader";
import NotificationsSection from "./NotificationsSection";
import DeactivateAccountSection from "./DeactivateAccountSection";
import DeleteAccountSection from "./DeleteAccountSection";

const Setting = () => {
  return (
    <div>
      <SettingHeader />
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <NotificationsSection />
        <DeactivateAccountSection />
        <DeleteAccountSection />
      </div>
    </div>
  );
};

export default Setting;
