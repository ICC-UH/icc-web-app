import { Outlet } from "@remix-run/react";

import { Glow } from "~/components/decoration";

import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Landing() {
  return (
    <>
      <Header />
      <Glow position="top-left" />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 justify-center overflow-hidden px-4">
        <Outlet />
      </div>
      <Glow position="bottom-right" />
      <Footer />
    </>
  );
}
