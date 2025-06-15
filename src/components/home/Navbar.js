const Navbar = () => {
    return (
        <nav className="bg-dark text-white h-100 p-3">
            <a className="navbar-brand bg-secondary rounded-pill p-2 d-block text-white text-center mb-4" href="#">
                Prozolife Dashboard
            </a>
            <ul className="nav flex-column align-items-start">

                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Dashboard</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
