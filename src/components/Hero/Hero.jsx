import "./Hero.css";
import PorofileImg from "../../assets/my image.png";
function Hero() {
  return (
    <div className="hero">
      <img src={PorofileImg} alt="porofile" />
      <h1>
        <span>I&apos;m Roya</span>,frontend developer
      </h1>
      <p>I&apos;m Iranian but I live in Malaysia.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
