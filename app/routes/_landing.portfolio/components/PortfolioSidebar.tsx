import { useLocation, useNavigate, useSearchParams } from "@remix-run/react";
import { useEffect, useState } from "react";

import { SidebarItem } from "../common/SidebarItem";

export default function PortfolioSidebar() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const year = parseInt(searchParams.get("year") || String(new Date().getFullYear()));

  const [expandAll, setExpandAll] = useState(false);

  useEffect(() => {
    const currentYear = new Date().getFullYear();

    if (year && (year < 2023 || year > currentYear)) {
      navigate("/portfolio");
    }
  }, [year, navigate]);

  const handleScroll = (to: "top" | "bottom") => {
    const scrollTo = to === "top" ? 0 : document.body.scrollHeight;
    window.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
  };

  const data = [
    {
      title: "2025",
      active: year === 2025,
      children: [
        {
          title: "HTB Cyber Apocalypse",
          active: location.hash === "#htb-cyber-apocalypse",
          hash: "htb-cyber-apocalypse",
        },
        {
          title: "Tryhackme Hackfinity Battle",
          active: location.hash === "#tryhackme-hackfinity-battle",
          hash: "tryhackme-hackfinity-battle",
        },
        {
          title: "PicoCTF",
          active: location.hash === "#picoctf",
          hash: "picoctf",
        },
      ],
    },
    {
      title: "2024",
      active: year === 2024,
      children: [
        {
          title: "PicoCTF",
          active: location.hash === "#picoctf",
          hash: "picoctf",
        },
      ],
    },
  ];

  return (
    <aside className="sticky top-7 w-64 space-y-3 overflow-y-auto rounded-xl bg-tertiary p-4 text-sm text-white">
      <ul className="flex flex-col gap-2">
        {data.map((item, i) => (
          <SidebarItem
            key={i}
            {...item}
            open={year === parseInt(item.title) || expandAll}
            onClick={() => navigate(`/portfolio?year=${item.title}`)}
          />
        ))}
      </ul>

      <hr className="my-3 border-gray-700" />

      <div className="flex flex-col space-y-2 text-xs text-gray-400">
        <button className="hover:text-white" onClick={() => setExpandAll((prev) => !prev)}>
          {!expandAll ? "Expand all" : "Collapse all"}
        </button>
        <button className="hover:text-white" onClick={() => handleScroll("top")}>
          Back to top
        </button>
        <button className="hover:text-white" onClick={() => handleScroll("bottom")}>
          Go to bottom
        </button>
      </div>
    </aside>
  );
}
