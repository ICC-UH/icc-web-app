import { Outlet } from "@remix-run/react";

import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Landing() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
