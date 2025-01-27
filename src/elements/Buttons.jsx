import { CaptionText } from "./Typegraphy";

// This is the primary button which contains the primary color
export const PrimaryButton = ({ className, type, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-3 px-12 w-fit rounded-lg cursor-pointer opacity-80 bg-primary  transition-all duration-300 hover:opacity-100 active:opacity-30 ${className}`}
    >
      <CaptionText>{children}</CaptionText>
    </button>
  );
};

// This is the outlined color which contains the cardVariant color
export const OutlinedButton = ({ className, type, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-3 px-12 w-fit rounded-lg cursor-pointer border-2 transition-all duration-300 hover:bg-cardVariant hover:border-cardVariant active:opacity-30 ${className}`}
    >
      <CaptionText>{children}</CaptionText>
    </button>
  );
};
