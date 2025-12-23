import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiCloseLargeFill } from "react-icons/ri";
import { useRef } from "react";

interface NavbarProps {
  navItem: string[];
}

const Navbar: React.FC<NavbarProps> = ({ navItem }) => {
  const menuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
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

export default Navbar;
