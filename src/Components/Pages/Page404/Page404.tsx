import "./Page404.css";
import  notfound  from "../../../Assets/Images/notfound.jpg"
function Page404(): JSX.Element {
    return (
        <div className="Page404">
<img src={ notfound } alt="image not found" />
        </div>
    );
}

export default Page404;
