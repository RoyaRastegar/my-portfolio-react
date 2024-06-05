import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import PropTypes from "prop-types";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiCloseLargeFill } from "react-icons/ri";
import { useRef } from "react";

const Navbar = ({ navItem }) => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <TfiMenuAlt className="nav-mob-open" onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <RiCloseLargeFill className="nav-mob-close" onClick={closeMenu} />
        {navItem.map((item, index) => (
          <li key={index}>
            <AnchorLink className="anchor-link" offset={50} href={`#${item}`}>
              {item}
            </AnchorLink>
          </li>
        ))}
      </ul>
      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#Contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  navItem: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Navbar;
