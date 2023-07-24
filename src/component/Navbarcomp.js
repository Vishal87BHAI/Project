import { NavLink } from 'react-router-dom';

function Navbarcomp() {
    return (
        <div>
            <nav className="navbar default fixed-top navbar-expand-lg navbar-dark bg-primary">
                <span className="navbar-brand">Navbar</span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className='nav-link' to="/">Home</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className='nav-link' to="/Teachers">Teachers</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className='nav-link' to="/Students">Students</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className='nav-link' to="/Jaggi">Jaggi Achievements</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbarcomp;