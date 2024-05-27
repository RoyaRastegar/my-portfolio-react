import porofile from "../../assets/my image.png";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <hr />
      </div>
      <div className="about-sections">
        <div className="section-left">
          <img src={porofile} />
        </div>
        <div className="section-right">
          <div className="about-para">
            <p>
              I&apos;m an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career,I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only ferlected in my
              extensive experince but also in the enthusiasm and dedication i
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>{" "}
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>{" "}
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Typescript</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
