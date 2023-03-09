import React from "react";

export const FormInput = ({
  type,
  id,
  label,
  inputClasses,
  labelClasses,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={inputClasses}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};
