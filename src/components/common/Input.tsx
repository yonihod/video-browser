export const Input: React.FC<
  React.ComponentPropsWithoutRef<"input"> & {
    error?: string;
    label?: string;
    labelProps?: React.ComponentPropsWithoutRef<"label">;
    helperText?: string;
  }
> = ({
  children,
  label,
  labelProps,
  error,
  helperText,
  className,
  ...props
}) => {
  return (
    <>
      {label && <label {...labelProps}>{label}</label>}
      <input {...props} className={`px-5 ${className} hover:border-dark`}>
        {children}
      </input>
      {error && <span className="text-dull-red"></span>}
    </>
  );
};
