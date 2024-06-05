import "./Hero.css";
import PorofileImg from "../../assets/my image.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="Home" className="hero">
      <img src={PorofileImg} alt="porofile" />
      <h1>
        <span>I&apos;m Roya</span>,frontend developer
      </h1>
      <p>I&apos;m Iranian but I live in Malaysia.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#Contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
