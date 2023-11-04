import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <span>My Website</span>
                <Link to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
                {/* <Link to="/users">Users</Link> */}
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <Link to="/contact">Contact Us</Link>

            </nav>
        </div>
    );
};

export default Header;