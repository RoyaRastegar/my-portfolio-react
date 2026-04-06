// components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import MyWork from "./components/Work/MyWork";
import Contact from "./components/Contact/Contact";
import GoToUp from "./components/GoToUp/GoToUp";

const App: React.FC = () => {
  const navbarItem: string[] = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Contact",
  ];

  return (
    <div>
      <Navbar navItem={navbarItem} />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <GoToUp />
    </div>
  );
};

export default App;
