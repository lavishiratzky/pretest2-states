import { useEffect, useState } from "react";
import { Root, Root2 } from "../../../Models/StatesModel";
import "./States.css";
import axios from "axios";
import StateCard from "../StateCard/StateCard";


function States(): JSX.Element {
    const [states, setStates] = useState<Root2[]>([])
    useEffect(()=>{ 
    axios.get<Root>('https://restcountries.com/v2/all ')
    .then(res =>{setStates(res.data)})
    .catch(err => {console.log(err)})
},[])
    return (
        <div className="States">
           
			{states.map(s=><StateCard key={'state' + s.name} state={s}/>)}
        </div>
    );
}

export default States;
