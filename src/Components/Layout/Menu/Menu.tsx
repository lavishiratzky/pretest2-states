import "./Menu.css";
import { Link } from "react-router-dom";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
        <Link to="states">States</Link>
            <Link to="about">About</Link>
        </div>
    );
}

export default Menu;
