import { TCtfCategory } from "~/types/common";

interface CtfCategoryPillProps {
  category: TCtfCategory;
  size?: "small" | "medium";
}

export function CtfCategoryPill({ category, size = "medium" }: CtfCategoryPillProps) {
  const categoryColors = {
    web: "bg-[#FFCB33]",
    crypto: "bg-[#6462FF]",
    pwn: "bg-[#F3552F]",
    reverse: "bg-[#FFAA23]",
    misc: "bg-[#A969FF]",
    forensic: "bg-[#B6DB55]",
    osint: "bg-[#32BBFF]",
  };
  const padding = {
    small: "px-1 py-[2px]",
    medium: "px-2 py-1",
  };

  const fontSize = {
    small: "text-[8px]",
    medium: "text-xs",
  };

  const gap = {
    small: "gap-[2px]",
    medium: "gap-1",
  };

  return (
    <span
      className={`flex items-center ${gap[size]} rounded-2xl ${padding[size]} ${fontSize[size]} font-semibold capitalize text-secondary ${categoryColors[category]}`}
    >
      <img
        src={`/app/icons/category/${category}.svg`}
        alt={category}
        className={size === "small" ? "size-2" : "size-4"}
      />
      {category}
    </span>
  );
}
