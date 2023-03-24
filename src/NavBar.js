import { Link, NavLink } from "react-router-dom"
import './NavBar.css'
function NavBar() {
    return (<div>
        <nav>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/usersList">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
        </nav>
    </div>);
}

export default NavBar;