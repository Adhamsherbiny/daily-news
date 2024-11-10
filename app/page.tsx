import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import Welcome from "./components/Welcome";
import News from "./components/News";
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
