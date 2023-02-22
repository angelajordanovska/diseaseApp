import {useState} from "react";

const Dropdown = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;

    return (
        <div className="dropdown" onClick={toggleOpen}>
            <button
                className="btn btn-outline-light dropdown-toggle m-3"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
            >
                Choose language
            </button>
            <div className={menuClass} aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="/it">
                    IT
                </a>
                <a className="dropdown-item" href="/">
                    FR
                </a>
            </div>
        </div>
    )
}

export default Dropdown;