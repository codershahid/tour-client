import React from "react";

export const FormSelect = ({
  id,
  label,
  selectClasses,
  labelClasses,
  value,
  onChange,
  options,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <select
        id={id}
        className={selectClasses}
        onChange={onChange}
        value={value}
      >
        {options.map((option) => (
          <option key={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};
