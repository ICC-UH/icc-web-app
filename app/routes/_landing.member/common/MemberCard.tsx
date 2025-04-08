import { CtfCategoryPill } from "~/components/pill";
import DiscordIcon from "~/icons/social/discord.svg?react";
import InstagramIcon from "~/icons/social/instagram.svg?react";
import LinkedinIcon from "~/icons/social/linkedin.svg?react";
import { TCtfCategory } from "~/types/common";
import { formatDate } from "~/utils/date";

interface MemberCardProps {
  name: string;

  role: string;
  joinDate: Date;

  quote?: string;

  imgUrl?: string;

  discordUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;

  expertise: TCtfCategory[];
}

export default function MemberCard({
  name,
  role,
  joinDate,
  imgUrl,
  quote,

  discordUrl,
  linkedinUrl,
  instagramUrl,

  expertise,
}: MemberCardProps) {
  return (
    <div className="flex h-fit gap-6 rounded-3xl border-[0.5px] border-border-dark bg-tertiary px-6 py-3">
      <div className="flex shrink-0 flex-col items-center gap-[2px]">
        <img
          src={imgUrl ?? "/assets/logos/logo.png"}
          alt={`${name}-avatar`}
          className="size-[50px] shrink-0 rounded-full bg-white object-contain"
        />
        <p className="text-center font-medium text-white">{name}</p>
      </div>
      <div className="flex h-full flex-col gap-3">
        <div>
          <p className="text-white">{role}</p>
          <p className="text-xs text-gray-400">Since {formatDate(joinDate)}</p>
        </div>
        {quote && <p className="text-sm text-white">{quote}</p>}
        <div className="flex flex-wrap items-start gap-1">
          {expertise.map((category) => (
            <CtfCategoryPill key={category} category={category} />
          ))}
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-3">
          {discordUrl && (
            <a
              href={discordUrl}
              target="_blank"
              rel="noreferrer"
              className="fill-[#E9944E] hover:fill-primary"
            >
              <DiscordIcon className="size-4" />
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="fill-[#E9944E] hover:fill-primary"
            >
              <LinkedinIcon className="size-4" />
            </a>
          )}
          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="fill-[#E9944E] hover:fill-primary"
            >
              <InstagramIcon className="size-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
