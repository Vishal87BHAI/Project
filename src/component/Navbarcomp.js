import { NavLink } from "react-router-dom";

function Navbarcomp() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark">
        <span className="navbar-brand">Navbar</span>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/Teachers">
                Teachers
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/Students">
                Students
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/Jaggi">
                Jaggi Achievements
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbarcomp;
