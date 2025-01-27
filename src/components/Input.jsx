import { useState } from "react";
import { CaptionText } from "../elements/Typegraphy";

// This function is created for basic Input Fields (Box / Card input which contain the card bg color)
export const BoxInput = ({
  className,
  labelTitle,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {labelTitle && (
        <label htmlFor={name}>
          <CaptionText>{labelTitle}</CaptionText>
        </label>
      )}
      <input
        id={name}
        className="p-4 outline-none text-sm rounded-sm border-1 border-card  bg-card focus:border-primary"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

// This function is created to create a checkbox input layout
export const CheckboxInput = ({
  className,
  labelTitle,
  name,
  checked,
  onChange,
  required = false,
}) => {
  return (
    <label
      className={`flex flex-row gap-3 cursor-pointer items-center ${className}`}
      htmlFor={name}
    >
      <input
        id={name}
        name={name}
        type="checkbox"
        onChange={onChange}
        required={required}
        checked={checked}
      />
      <CaptionText>{labelTitle}</CaptionText>
    </label>
  );
};

// This function is used to create a Password Input Field which can be used to input passwords
export const PasswordInput = ({
  className,
  labelTitle,
  name,
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  // This variable is used for the visible state for the input
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {labelTitle && (
        <label htmlFor={name}>
          <CaptionText>{labelTitle}</CaptionText>
        </label>
      )}

      <div className="flex items-center gap-2 px-4 rounded-sm border-1 border-card bg-card focus-within:border-primary">
        <input
          id={name}
          className="flex-1 py-4 outline-none text-sm"
          name={name}
          type={isVisible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />

        <button type="button" onClick={toggleVisibility}>
          {VisibleIcon(isVisible)}
        </button>
      </div>
    </div>
  );
};

// This funciton returns the necessary svg for the Visible Icon
const VisibleIcon = (isVisible) => {
  return isVisible ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};
