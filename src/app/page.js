import { Hero, About, Point, Faq, Side } from "./components/Home";
import { Navbar } from "./components";

const Home = () => {
  return (
    <>
    
    <Navbar />

    <main>
      <Side />
      <Hero />
      <Point />
      <About />
      <Faq />

    </main>
    </>
  );
}

export default Home;