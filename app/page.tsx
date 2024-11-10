import Container from "./layouts/container";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import Welcome from "./components/Welcome";
import News from "./components/News";
export default function Home() {
  return (
    <Container>
      <Nav />
      <Welcome />
      <Explore />
      <News />
      <Footer />
    </Container>
  );
}
