import "./StateCard.css";
import { Root2 } from "../../../Models/StatesModel";
interface StateCardProps{
    state:Root2
}


function StateCard(props:StateCardProps): JSX.Element {

    return (
        <div className="StateCard">
		{props.state.name? <p>Capital: {props.state.name}</p>:<p>No name yet</p>}
        {props.state.capital? <p>Capital: {props.state.capital}</p>:<p>No Capital yet</p>}
        {props.state.population? <p>Population: {props.state.population}</p> : <p>No population yet</p>}
        {props.state.flag?
        <img src={props.state.flag } alt="image not found" /> :<p>No Flag yet</p>}		
        </div>
    );
}

export default StateCard;
