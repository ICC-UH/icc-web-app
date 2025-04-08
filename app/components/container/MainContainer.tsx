interface MainContainerProps {
  children: React.ReactNode;
  additionalClasses?: string;
}

export function MainContainer({ children, additionalClasses }: MainContainerProps) {
  return (
    <main className={`flex flex-1 flex-col gap-10 ${additionalClasses} relative`}>{children}</main>
  );
}
