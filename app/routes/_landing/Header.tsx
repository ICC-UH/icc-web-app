import { useLocation } from "@remix-run/react";

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-7 z-50 mb-10 flex items-center justify-center gap-6">
      <img src="/assets/logos/logo.png" alt="icc-uh-logo" className="h-[58px] w-auto" />
      <nav className="flex items-center justify-between gap-6 rounded-[30px] border border-border bg-secondary p-5 px-7 text-[16px]">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`${location.pathname === item.href ? "text-primary" : "text-white"} hover:text-primary`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </header>
  );
}

const navItems = [
  { href: "/", text: "Home" },
  // { href: "/about", text: "About" },
  { href: "/achievement", text: "Achievement" },
  { href: "/member", text: "Members" },
  { href: "/leaderboard", text: "Leaderboard" },
  { href: "/portfolio", text: "Portfolio" },
];
