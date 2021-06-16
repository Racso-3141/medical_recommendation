import React from 'react';
import "./Outputs.css"
import {useStateValue} from "../StateProvider";

function Outputs() {
    const [state, dispatch] = useStateValue();

    return (
        <div className="outputs">
            {state["drug"].map((item)=>
                <h2>{item}</h2>
            )}
        </div>
    )
}

export default Outputs
