interface DividerProps {
  children?: React.ReactNode;
}

export function Divider({ children }: DividerProps) {
  if (children) {
    return (
      <div className="flex items-center">
        <span className="h-[2px] w-full bg-white" />
        {children}
        <span className="h-[2px] w-full bg-white" />
      </div>
    );
  }

  return <span className="h-[2px] w-full bg-white" />;
}
