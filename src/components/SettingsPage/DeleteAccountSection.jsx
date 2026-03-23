import React, { useState } from "react";
import SettingRadioGroup from "./SettingRadioGroup";

const deleteOptions = [
  "No longer usable",
  "Want to switch on other account",
  "Other",
];

const DeleteAccountSection = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="pt-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-5">
        Delete Account
      </h2>
      <SettingRadioGroup
        name="delete"
        options={deleteOptions}
        selected={selected}
        onChange={setSelected}
      />
      <button className="mt-6 px-6 py-2.5 bg-[#FA6C48] hover:bg-[#FA6C48]/90 text-white text-sm font-semibold rounded-lg transition-colors">
        Delete My Account
      </button>
    </div>
  );
};

export default DeleteAccountSection;
