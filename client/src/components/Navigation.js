const Navbar= () => {

    return (
<div >
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" >
    <a className="navbar-brand" href="#">Welcome to our App!</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav"  >
       
        <li className="nav-item" class="Log1">
          <a className="nav-link" href="#">Login</a>
        </li>
        <li className="nav-item" class="Log2">
          <a className="nav-link" href="#">Register</a>
        </li>
        <li className="nav-item" class="Log3">
            <a className="nav-link" href="#">Profile</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


</div>

    );
}

export default Navbar;