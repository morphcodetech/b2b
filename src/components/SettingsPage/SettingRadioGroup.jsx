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
          className="
            w-4 h-4 cursor-pointer rounded-full border-2 border-gray-300
            bg-white appearance-none
            checked:border-[#FA6C48] checked:bg-[#FA6C48]
            focus:outline-none focus:ring-2 focus:ring-[#FA6C48]/30
          "
        />
        <span className="text-sm text-gray-600">{option}</span>
      </label>
    ))}
  </div>
);

export default SettingRadioGroup;
