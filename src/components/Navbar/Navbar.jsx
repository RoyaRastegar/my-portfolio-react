// import Logo from "../../assets/logo.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* <img src={Logo} alt="logo" /> */}
      <ul className="nav-menu">
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
