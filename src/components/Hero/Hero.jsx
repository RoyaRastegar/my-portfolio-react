import "./Hero.css";
import PorofileImg from "../../assets/my image.png";
function Hero() {
  return (
    <div className="hero">
      <img src={PorofileImg} alt="porofile" />
      <div className="hero-right">
        <h1>
          <span>I am Roya</span>,frontend developer
        </h1>
        <p>I am Iranian but I live in Malaysia.</p>
        <div className="hero-action">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume">My resume</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
