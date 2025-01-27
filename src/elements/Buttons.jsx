import { CaptionText } from "./Typegraphy";

export const PrimaryButton = ({ text, onClick, children, type, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-3 px-12 w-fit rounded-xl cursor-pointer bg-cardVariant hover:bg-primary transition-all duration-300 active:opacity-30 ${className}`}
    >
      {text && <CaptionText text={text} />}
      {children}
    </button>
  );
};
