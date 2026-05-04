import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar () {
    return (
        <nav className="navbar">
            <ul className="nav-links">
            <li>
            <Link to="/">Home</Link>
            </li>

            <li>
            <Link to="/About">About</Link>
            </li>

            <li>
            <Link to="/Portfolio">Portfolio</Link>
            </li>
            </ul>
        </nav>
    );
}

export default Navbar; 