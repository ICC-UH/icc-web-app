import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  additionalClasses?: string;
}

export function Button({ label, startIcon, endIcon, additionalClasses, ...rest }: ButtonProps) {
  return (
    <button
      className={`rounded bg-blue-500 px-4 py-2 font-bold text-white ${additionalClasses}`}
      type="button"
      {...rest}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {label}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
}
