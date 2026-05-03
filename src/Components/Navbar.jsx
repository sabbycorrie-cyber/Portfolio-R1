import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar () {
    return (
        <nav className="navbar">
            <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Portfolio">Portfolio</Link>
            </div>
        </nav>
    );
}

export default Navbar; 