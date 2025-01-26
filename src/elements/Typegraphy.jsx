export const Heading2 = ({ text, className }) => {
  return <h2 className={`font-bold text-3xl ${className}`}>{text}</h2>;
};

export const BodyText = ({ text, className }) => {
  return <p className={`text-base opacity-60 ${className}`}>{text}</p>;
};

export const CaptionText = ({ text, className }) => {
  return <p className={`text-xs ${className}`}>{text}</p>;
};
