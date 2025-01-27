export const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  required = false,
}) => {
  return (
    <input
      className="p-4 outline-none border-1 rounded-xl text-sm focus:border-primary"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      required={required}
    />
  );
};
