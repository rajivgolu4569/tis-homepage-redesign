import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Learning from "./components/sections/Learning.jsx";
import Campus from "./components/sections/Campus.jsx";
import Admissions from "./components/sections/Admissions.jsx";
import ScrollProgress from "./components/animation/ScrollProgress.jsx";
import CustomCursor from "./components/animation/CustomCursor.jsx";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Learning />
        <Campus />
        <Admissions />
      </main>
      <Footer />
    </>
  );
}
