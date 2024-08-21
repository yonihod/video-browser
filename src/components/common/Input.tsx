export const Input: React.FC<
  React.ComponentPropsWithoutRef<"input"> & {
    error?: string;
    label?: string;
    labelProps?: React.ComponentPropsWithoutRef<"label">;
  }
> = ({ children, label, labelProps, className, ...props }) => {
  return (
    <>
      {label && <label {...labelProps}>{label}</label>}
      <input {...props} className={`px-5 ${className}`}>
        {children}
      </input>
    </>
  );
};
