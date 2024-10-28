"use client";
import Nav from "./Nav";
import Footer from "./Footer";
import Explore from "./Explore";
import Welcome from "./Welcome";
import News from "./News";
export default function Home() {
  return (
    <div>
      <Nav />
      <Welcome />
      <Explore />
      <News />
      <Footer />
    </div>
  );
}
