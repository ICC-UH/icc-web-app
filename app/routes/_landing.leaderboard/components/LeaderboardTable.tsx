import { Table } from "~/components/table";

export default function LeaderboardTable() {
  const headers = ["Rank", "Player", "Flag"];
  const rows = [
    { rank: 4, player: "Ziru", flag: 12 },
    { rank: 5, player: "Alice", flag: 15 },
    { rank: 6, player: "Bob", flag: 10 },
    { rank: 7, player: "Charlie", flag: 20 },
  ];

  return <Table headers={headers} rows={rows} additionalClasses="w-full max-w-[700px] mx-auto" />;
}
