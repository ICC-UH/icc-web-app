import { MetaFunction } from "@remix-run/react";

import { MainContainer } from "~/components/container/MainContainer";
import { Title } from "~/components/typography";

import PortfolioCard from "./common/PortfolioCard";
import PortfolioSidebar from "./components/PortfolioSidebar";

export const meta: MetaFunction = () => {
  return [{ title: "Portfolio ICC UH" }, { name: "description", content: "ICC UH Portfolio" }];
};

export default function Portfolio() {
  return (
    <MainContainer>
      <Title>Portfolio</Title>
      <div className="relative flex items-start justify-center gap-5">
        <PortfolioSidebar />
        <section className="flex w-full max-w-[800px] flex-col gap-4">
          {mockData.map((portfolio, index) => (
            <PortfolioCard
              id={portfolio.id}
              key={index}
              title={portfolio.title}
              description={portfolio.description}
              categories={portfolio.categories}
              url={portfolio.url}
            />
          ))}
        </section>
      </div>
    </MainContainer>
  );
}

export const mockData: React.ComponentProps<typeof PortfolioCard>[] = [
  {
    id: "picoctf",
    title: "Portfolio 1",
    description: "Description of Portfolio 1",
    categories: ["web", "reverse"],
    url: "https://example.com/portfolio1",
  },
  {
    id: "ctf",
    title: "Portfolio 2",
    description: "Description of Portfolio 2",
    categories: ["misc", "pwn"],
    url: "https://example.com/portfolio2",
  },
  {
    id: "ctf",
    title: "Portfolio 2",
    description: "Description of Portfolio 2",
    categories: ["misc", "pwn"],
    url: "https://example.com/portfolio2",
  },
  {
    id: "ctf",
    title: "Portfolio 2",
    description: "Description of Portfolio 2",
    categories: ["misc", "pwn"],
    url: "https://example.com/portfolio2",
  },
  {
    id: "ctf",
    title: "Portfolio 2",
    description: "Description of Portfolio 2",
    categories: ["misc", "pwn"],
    url: "https://example.com/portfolio2",
  },
  {
    id: "ctf",
    title: "Portfolio 2",
    description: "Description of Portfolio 2",
    categories: ["misc", "pwn"],
    url: "https://example.com/portfolio2",
  },
  {
    id: "ctf",
    title: "Portfolio 2",
    description: "Description of Portfolio 2",
    categories: ["misc", "pwn"],
    url: "https://example.com/portfolio2",
  },
  {
    id: "ctf",
    title: "Portfolio 2",
    description: "Description of Portfolio 2",
    categories: ["misc", "pwn"],
    url: "https://example.com/portfolio2",
  },
  {
    id: "ctf",
    title: "Portfolio 2",
    description: "Description of Portfolio 2",
    categories: ["misc", "pwn"],
    url: "https://example.com/portfolio2",
  },
  {
    id: "ctf",
    title: "Portfolio 2",
    description: "Description of Portfolio 2",
    categories: ["misc", "pwn"],
    url: "https://example.com/portfolio2",
  },
  {
    id: "ctf",
    title: "Portfolio 2",
    description: "Description of Portfolio 2",
    categories: ["misc", "pwn"],
    url: "https://example.com/portfolio2",
  },
  {
    id: "ctf",
    title: "Portfolio 2",
    description: "Description of Portfolio 2",
    categories: ["misc", "pwn"],
    url: "https://example.com/portfolio2",
  },
];
