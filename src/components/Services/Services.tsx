import "./Services.css";
import Services_Data from "../../assets/services-data";
import { FaArrowRight } from "react-icons/fa6";

const Services: React.FC = () => {
  return (
    <div id="Services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <hr />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read more</p>
                <FaArrowRight />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
