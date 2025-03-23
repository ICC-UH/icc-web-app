interface CarouselContainerProps {
  children?: React.ReactNode;
}

export function CarouselContainer({ children }: CarouselContainerProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
