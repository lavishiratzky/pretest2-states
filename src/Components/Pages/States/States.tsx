import { useEffect, useState } from "react";
import { Root, Root2 } from "../../../Models/StatesModel";
import "./States.css";
import axios from "axios";
import StateCard from "../StateCard/StateCard";
import notifyService from "../../../Sercices/Notification Service";


function States(): JSX.Element {
    const [query ,setQuery] =useState<string>("")
    const [states, setStates] = useState<Root2[]>([])
    useEffect(()=>{ 
    axios.get<Root>('https://restcountries.com/v2/all ')
    .then(res =>{setStates(res.data)
        console.log("rendered")
        notifyService.success('Meou Chtula!!!!!!')})
    
    .catch(err => {console.log(err)
        notifyService.error(err.message);
        // notifyService.error('Opps I did it again!!!')
})
},[])
    return (
        <div className="States">
            <h1> Country <input placeholder ="Enter a Country" onChange = {event => setQuery(event.target.value)} />  </h1>    
			{states.filter(state =>{
                if(query===""){
                    return states
                }
                else if (state.name.toLocaleLowerCase().includes(query.toLowerCase())){
                    return states
                }
            })
            .map(s=><StateCard key={'state' + s.name} state={s}/>)}
        </div>
    );
}

export default States;
