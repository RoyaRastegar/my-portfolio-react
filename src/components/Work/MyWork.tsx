import "./MyWork.css";
import MyWork_Data from "../../assets/myWork-data";
import { FaArrowRight } from "react-icons/fa6";

const MyWork: React.FC = () => {
  return (
    <div id="Portfolio" className="myWork">
      <div className="myWork-title">
        <h1>My Work</h1>
        <hr />
      </div>
      <div className="myWork-container">
        {MyWork_Data.map((work, index) => {
          return (
            <div key={index} className="myWork-format">
              <h2>{work.w_name}</h2>
              <p>{work.w_desc}</p>
            </div>
          );
        })}
      </div>
      <div className="myWork-showMore">
        <h3>Show More</h3>
        <FaArrowRight className="myWork-show-icon" />
      </div>
    </div>
  );
};

export default MyWork;
