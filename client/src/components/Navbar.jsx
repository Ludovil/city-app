import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/signup">Sign up</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
