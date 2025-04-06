interface GlowProps {
  width?: string | number;
  height?: string | number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  blur?: number;
  animationDelay?: string; // e.g., '2s'
  className?: string;
}

export const Glow = ({
  width = "50%",
  height = "100%",
  position = "top-left",
  animationDelay,
  className = "",
}: GlowProps) => {
  const positionStyles = {
    "top-left": "top-[-50%] left-[-20%]",
    "top-right": "top-[-50%] right-[-20%]",
    "bottom-left": "bottom-[-50%] left-[-20%]",
    "bottom-right": "bottom-[-50%] right-[-20%]",
  };

  return (
    <div
      className={`fixed -z-10 rounded-full opacity-70 ${position.includes("bottom") ? "animate-bounceUp" : "animate-bounceDown"} ${positionStyles[position]} ${className}`}
      style={{
        width: `${width}`,
        height: `${height}`,
        animationDelay: animationDelay ?? "0s",
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(136, 64, 0, 0.70) 0%, rgba(88, 42, 0, 0.00) 100%)",
      }}
    />
  );
};
