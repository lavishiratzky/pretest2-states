import "./StateCard.css";
import { Root2 } from "../../../Models/StatesModel";
interface StateCardProps{
    state:Root2
}


function StateCard(props:StateCardProps): JSX.Element {

    return (
        <div className="StateCard">
		<p>Name: {props.state.name}</p>
        <p>Capital: {props.state.capital}</p>
        <p>Population: {props.state.population}</p>
        <p>Flag:</p>
        <img src={props.state.flag } alt="image not found" />		
        </div>
    );
}

export default StateCard;
