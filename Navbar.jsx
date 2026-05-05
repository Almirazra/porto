import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="navbar-brand">Navbar</h3>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/experience" className="navbar-link">Experience</Link>
        </li>
        <li className="navbar-item">
          <Link to="/project" className="navbar-link">Project</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
