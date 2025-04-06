import { TCtfCategory } from "~/types/common";

interface CtfCategoryPillProps {
  category: TCtfCategory;
}

export function CtfCategoryPill({ category }: CtfCategoryPillProps) {
  const categoryColors = {
    web: "bg-web",
    crypto: "bg-crypto",
    pwn: "bg-pwn",
    rev: "bg-rev",
    misc: "bg-misc",
    forensic: "bg-forensic",
    osint: "bg-osint",
  };

  return (
    <span
      className={`rounded-full px-4 py-1 text-xs font-semibold text-white ${categoryColors[category]}`}
    >
      {category}
    </span>
  );
}
