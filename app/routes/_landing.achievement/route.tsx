import type { MetaFunction } from "@remix-run/node";

import { MainContainer } from "~/components/container/MainContainer";
import { Divider } from "~/components/divider";
import { Title } from "~/components/typography";

import AchievementCard from "./common/AchievementCard";

export const meta: MetaFunction = () => {
  return [{ title: "Achievement" }, { name: "description", content: "ICC UH achievements" }];
};

export default function Achievement() {
  return (
    <MainContainer>
      <Title>Achievement</Title>

      <section className="flex flex-col gap-4">
        <Divider>
          <p className="mx-[54px] w-fit text-[32px]">2025</p>
        </Divider>

        <div className="flex flex-wrap justify-around gap-4 gap-y-10 px-2">
          <AchievementCard
            date={new Date("2025-01-01")}
            title="Pragyan CTF 2025"
            description="1st Place"
            rank={1}
            url="https://pragyan.org/ctf"
            certificateUrl="https://pragyan.org/ctf/certificate/2025/1st-place"
          />
          <AchievementCard
            date={new Date("2025-02-01")}
            title="Hackathon 2025"
            description="2nd Place"
            rank={2}
            url="https://hackathon.org/2025"
            certificateUrl="https://hackathon.org/2025/certificate/2nd-place"
          />
          <AchievementCard
            date={new Date("2025-03-01")}
            title="Codefest 2025"
            description="3rd Place"
            rank={3}
            url="https://codefest.org/2025"
            certificateUrl="https://codefest.org/2025/certificate/3rd-place"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <Divider>
          <p className="mx-[54px] w-fit text-[32px]">2024</p>
        </Divider>

        <div className="flex flex-wrap justify-around gap-4 gap-y-10 px-2">
          <AchievementCard
            date={new Date("2025-01-01")}
            title="Pragyan CTF 2025"
            description="1st Place"
            rank={1}
            url="https://pragyan.org/ctf"
            certificateUrl="https://pragyan.org/ctf/certificate/2025/1st-place"
          />
          <AchievementCard
            date={new Date("2025-02-01")}
            title="Hackathon 2025"
            description="2nd Place"
            rank={2}
            url="https://hackathon.org/2025"
            certificateUrl="https://hackathon.org/2025/certificate/2nd-place"
          />
          <AchievementCard
            date={new Date("2025-03-01")}
            title="Codefest 2025"
            description="3rd Place"
            rank={3}
            url="https://codefest.org/2025"
            certificateUrl="https://codefest.org/2025/certificate/3rd-place"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <Divider>
          <p className="mx-[54px] w-fit text-[32px]">2023</p>
        </Divider>

        <div className="flex flex-wrap justify-around gap-4 gap-y-10 px-2">
          <AchievementCard
            date={new Date("2025-01-01")}
            title="Pragyan CTF 2025"
            description="1st Place"
            rank={1}
            url="https://pragyan.org/ctf"
            certificateUrl="https://pragyan.org/ctf/certificate/2025/1st-place"
          />
          <AchievementCard
            date={new Date("2025-02-01")}
            title="Hackathon 2025"
            description="2nd Place"
            rank={2}
            url="https://hackathon.org/2025"
            certificateUrl="https://hackathon.org/2025/certificate/2nd-place"
          />
          <AchievementCard
            date={new Date("2025-03-01")}
            title="Codefest 2025"
            description="3rd Place"
            rank={3}
            url="https://codefest.org/2025"
            certificateUrl="https://codefest.org/2025/certificate/3rd-place"
          />
        </div>
      </section>
    </MainContainer>
  );
}
