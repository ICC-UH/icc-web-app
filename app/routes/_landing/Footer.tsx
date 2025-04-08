import DiscordIcon from "~/icons/social/discord.svg?react";
import InstagramIcon from "~/icons/social/instagram.svg?react";
import LinkedinIcon from "~/icons/social/linkedin.svg?react";

export function Footer() {
  return (
    <footer className="mt-20 flex h-[200px] flex-col items-center justify-center gap-7 bg-tertiary">
      <p className="text-center text-xl font-[600] text-primary">Exploramus, Captamus, Vincimus</p>
      <section className="flex gap-8">
        <a
          href="https://discord.gg/iccuh"
          target="_blank"
          rel="noreferrer"
          className="fill-[#E6E6E6] hover:fill-primary"
        >
          <DiscordIcon />
        </a>

        <a
          href="https://www.linkedin.com/company/iccuh/"
          target="_blank"
          rel="noreferrer"
          className="fill-[#E6E6E6] hover:fill-primary"
        >
          <LinkedinIcon />
        </a>

        <a
          href="https://www.instagram.com/iccuh/"
          target="_blank"
          rel="noreferrer"
          className="fill-[#E6E6E6] hover:fill-primary"
        >
          <InstagramIcon />
        </a>
      </section>
      <p className="text-center text-sm">© ICC UH. All rights reserved.</p>
    </footer>
  );
}
