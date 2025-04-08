import { MetaFunction } from "@remix-run/react";

import { MainContainer } from "~/components/container/MainContainer";
import { Title } from "~/components/typography";

import MemberCard from "./common/MemberCard";

export const meta: MetaFunction = () => {
  return [{ title: "Members ICC UH" }, { name: "description", content: "ICC UH members" }];
};

export default function Member() {
  return (
    <MainContainer>
      <Title>Members</Title>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            joinDate={member.joinDate}
            imgUrl={member.imgUrl}
            discordUrl={member.discordUrl}
            linkedinUrl={member.linkedinUrl}
            instagramUrl={member.instagramUrl}
            expertise={member.expertise}
            quote={member.quote}
          />
        ))}
      </section>
    </MainContainer>
  );
}

export const data: React.ComponentProps<typeof MemberCard>[] = [
  {
    name: "Ztz",
    role: "Admin",
    joinDate: new Date("2023-01-01"),
    discordUrl: "https://discord.com/invite/your-invite-code",
    linkedinUrl: "https://www.linkedin.com/in/your-profile",
    instagramUrl: "https://www.instagram.com/your-profile",
    expertise: ["reverse", "pwn", "web", "forensic", "misc"],
    quote: "Gua bantai lu",
  },
  {
    name: "Ziru",
    role: "Founder",
    joinDate: new Date("2023-02-01"),
    discordUrl: "https://discord.com/invite/your-invite-code",
    linkedinUrl: "https://www.linkedin.com/in/your-profile",
    instagramUrl: "https://www.instagram.com/your-profile",
    expertise: ["web", "reverse"],
    quote: "Shine like gold",
  },
];
