import React, { useState } from "react";
import SettingRadioGroup from "./SettingRadioGroup";

const deactivateOptions = [
  "I have a privacy concern",
  "This is temporary",
  "other",
];

const DeactivateAccountSection = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="py-8 border-b border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-5">
        Deactivate Account
      </h2>
      <SettingRadioGroup
        name="deactivate"
        options={deactivateOptions}
        selected={selected}
        onChange={setSelected}
      />
      <button className="mt-6 px-6 py-2.5 bg-[#FA6C48] hover:bg-[#FA6C48]/90 text-white text-sm font-semibold rounded-lg transition-colors">
        Deactivate Account
      </button>
    </div>
  );
};

export default DeactivateAccountSection;
