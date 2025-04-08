interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  error?: string;
}

export function TextField({
  onChange,
  value,
  label,
  placeholder,
  startIcon,
  endIcon,
  error,
  type = "text",
  ...props
}: TextFieldProps) {
  return (
    <div className="w-full">
      <label className="mb-1 block text-sm font-semibold text-orange-400">{label}</label>
      <div
        className={`flex w-full items-center rounded-full border border-orange-500 bg-gradient-to-r from-[#462100] via-[#1c1c1c] to-[#1c1c1c] px-3 py-2 shadow-[0_0_10px_rgba(255,115,0,0.2)] transition focus-within:ring-2 focus-within:ring-orange-500`}
      >
        {startIcon && <div className="mr-2 text-orange-300">{startIcon}</div>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
          className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
        />
        {endIcon && <div className="ml-2 text-orange-300">{endIcon}</div>}
      </div>
      {error && <p className="mt-1 text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}
