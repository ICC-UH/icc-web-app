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
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${additionalClasses}`}
      type="button"
      {...rest}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {label}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
}
