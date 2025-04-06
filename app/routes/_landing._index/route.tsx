import type { MetaFunction } from "@remix-run/node";

import { MainContainer } from "~/components/container/MainContainer";

export const meta: MetaFunction = () => {
  return [{ title: "Landing Page" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <MainContainer additionalClasses="mt-10">
      <section className="flex flex-col gap-12">
        <div className="flex w-full items-center justify-center gap-10 text-primary">
          <h1 className="w-fit text-[200px] font-bold leading-[0px] tracking-[-5%]">ICC</h1>
          <img src="/assets/logos/logo.png" alt="icc-uh-logo" className="h-[371px] w-auto" />
          <h1 className="w-fit text-[200px] font-bold leading-[0px] tracking-[-5%]">UH</h1>
        </div>

        <p className="mx-auto max-w-[900px] text-center text-2xl font-semibold">
          ICC UH is <span className="text-[#D50000]">Hasanuddin Univerisity’s</span> cyber community
          that dedicate to organizing college engagements ion cyber world such as Capture the flag
          (CTF), Basic cyber security training,etc........
        </p>
      </section>
    </MainContainer>
  );
}
