import { MetaFunction } from "@remix-run/react";

import { MainContainer } from "~/components/container/MainContainer";
import { Title } from "~/components/typography";

import LeaderboardCard from "./common/LeaderBoardCard";
import LeaderboardTable from "./components/LeaderboardTable";

export const meta: MetaFunction = () => {
  return [{ title: "Achievement" }, { name: "description", content: "ICC UH achievements" }];
};

export default function Leaderboard() {
  return (
    <MainContainer>
      <Title>Leaderboard</Title>
      <section className="mx-auto grid grid-cols-1 gap-10 lg:grid-cols-3">
        {data.map((leaderboard, index) => (
          <LeaderboardCard
            key={index}
            player={leaderboard.player}
            rank={leaderboard.rank}
            flags={leaderboard.flags}
            additionalClasses={index === 0 ? "mt-8" : index === 2 ? "mt-12" : undefined}
          />
        ))}
      </section>
      <LeaderboardTable />
    </MainContainer>
  );
}

const data: React.ComponentProps<typeof LeaderboardCard>[] = [
  {
    player: "Ziru",
    rank: 2,
    flags: 99,
  },
  {
    player: "Ztz",
    rank: 1,
    flags: 100,
  },
  {
    player: "Mage",
    rank: 3,
    flags: 80,
  },
];
