import React from 'react';
import "./Outputs.css"
import {useStateValue} from "../StateProvider";

function Outputs() {
    const [state, dispatch] = useStateValue();

    return (
        <div className="outputs">
            <ul>
                {state["drug"].length > 0 && state["drug"].map((item)=>
                        <li>{item}</li>                
                )}
            </ul>
        </div>
    )
}

export default Outputs
