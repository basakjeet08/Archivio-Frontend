export const Heading2 = ({ children, className }) => {
  return <h2 className={`font-bold text-3xl ${className}`}>{children}</h2>;
};

export const BodyText = ({ children, className }) => {
  return <p className={`text-base opacity-60 ${className}`}>{children}</p>;
};

export const CaptionText = ({ children, className }) => {
  return <p className={`text-sm font-semibold ${className}`}>{children}</p>;
};
