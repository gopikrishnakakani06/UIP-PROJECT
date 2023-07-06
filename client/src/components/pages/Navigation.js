import { Outlet, Link } from "react-router-dom";

const Navbar= () => {


  


    return (
<div >
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/">Welcome to our App!</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav"  >
       
        <li className="nav-item" class="Log1">
          <Link className="nav-link" to="/Login">Login</Link>
        </li>
        <li className="nav-item" class="Log2">
          <Link className="nav-link" to="/Register">Register</Link>
        </li>
        <li className="nav-item" class="Log3">
            <Link className="nav-link" to="/Profile">Profile</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<Outlet />
</div>

    );
}

export default Navbar;