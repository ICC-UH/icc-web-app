import { useLocation } from "@remix-run/react";

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-7 z-50 mx-auto mb-16 flex items-center justify-center gap-6">
      <img src="/assets/logos/logo.png" alt="icc-uh-logo" className="h-[58px] w-[52px]" />
      <nav
        className="flex items-center justify-between gap-6 rounded-[30px] border border-border p-5 px-7 text-[16px]"
        style={{
          background:
            "radial-gradient(146.25% 129.56% at 0% 17.62%, rgba(255, 120, 0, 0.20) 0%, rgba(62, 102, 128, 0.04) 73.43%, rgba(70, 144, 212, 0.00) 100%)",
          backgroundBlendMode: "overlay",
          backdropFilter: "blur(40px)",
        }}
      >
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
