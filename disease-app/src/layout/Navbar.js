import Dropdown from "./Dropdown";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="btn btn-outline-light" to="/">Home</Link>
                    <div  className="navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <Dropdown />
                    </div>
                </div>
            </nav>
    )
}
export default Navbar;