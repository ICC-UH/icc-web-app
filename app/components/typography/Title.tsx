interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return <h1 className="text-center text-[55px] font-semibold">{children}</h1>;
}
