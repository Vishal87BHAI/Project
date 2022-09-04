import { NavLink } from 'react-router-dom';


function Navbarcomp() {
    return (
        <div>
            <nav class="navbar default fixed-top navbar-expand-lg navbar-dark bg-primary">
                <span className="navbar-brand">Navbar</span>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <NavLink className='nav-link' to="/">Home</NavLink>
                        </li>
                        <li class="nav-item active">
                            <NavLink className='nav-link' to="/Teachers">Teachers</NavLink>
                        </li>
                        <li class="nav-item active">
                            <NavLink className='nav-link' to="/Students">Students</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbarcomp;