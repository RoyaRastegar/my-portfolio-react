import "./Navbar.css";
import PropTypes from "prop-types";

const Navbar = ({ navItem }) => {
  return (
    <div className="navbar">
      <ul className="nav-menu">
        {navItem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};
Navbar.propTypes = {
  navItem: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Navbar;
