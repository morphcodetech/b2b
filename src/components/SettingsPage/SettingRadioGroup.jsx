import React from "react";

const SettingRadioGroup = ({ name, options, selected, onChange }) => (
  <div className="flex flex-col gap-3">
    {options.map((option, i) => (
      <label key={i} className="flex items-center gap-3 cursor-pointer">
        <input
          type="radio"
          name={name}
          value={option}
          checked={selected === option}
          onChange={() => onChange(option)}
          className="w-4 h-4 accent-[#0fa488] cursor-pointer"
        />
        <span className="text-sm text-gray-600">{option}</span>
      </label>
    ))}
  </div>
);

export default SettingRadioGroup;
