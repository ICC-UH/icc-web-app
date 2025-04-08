import { CtfCategoryPill } from "~/components/pill";
import { TCtfCategory } from "~/types/common";

interface PortfolioCardProps {
  id: string;
  title: string;
  description: string;
  categories: TCtfCategory[];
  url: string;
}

export default function PortfolioCard({
  id,
  title,
  description,
  categories,
  url,
}: PortfolioCardProps) {
  return (
    <div
      id={id}
      className="flex w-full flex-col gap-4 rounded-xl border-primary bg-tertiary px-10 py-6"
    >
      <div>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          {categories.map((category) => (
            <CtfCategoryPill key={category} category={category} />
          ))}
        </div>
      </div>
      <p className="text-lg">{description}</p>
      <a className="mt-4 text-lg text-primary" href={url} target="_blank" rel="noopener noreferrer">
        See details &gt;
      </a>
    </div>
  );
}
