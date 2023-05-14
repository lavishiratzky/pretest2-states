import States from "../../Pages/States/States";
import "./Routing.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../../App";
import About from "../About/About";
import Page404 from "../../Pages/Page404/Page404";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<App/>}/>
                <Route index element={<States />}/>
                <Route path="about" element={<About/>}/>
                <Route path="states" element={<States/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
            
        </div>
    );
}

export default Routing;
