import React from 'react';
import {useStateValue} from "../StateProvider";
import "./Controls.css";

function Controls({data}) {
    const [state, dispatch] = useStateValue();

    const handleGenerateClick = () => {
        const diagnoses = state["diagnosis"];
        const procedures = state["procedure"];

        const diagnoses_indices = diagnoses.map((item)=>
            data["diagnosis"].find(
                (element)=>element["name"] === item
            )["index"]
        );


        const procedures_indices = procedures.map((item)=>
            data["procedure"].find(
                (element)=>element["name"] === item
            )["index"]
        );


        diagnoses_indices.sort();
        procedures_indices.sort();


        const diag_str = diagnoses_indices.join("-");
        const pro_str = procedures_indices.join("-");
    };

    const handleResetClick = () => {

    };

    return (
        <div className = "generate_reset">
            <button id="generate_btn" onClick={handleGenerateClick}>Generate</button>
            <button id="reset_btn">Reset</button>
        </div>
    )
}

export default Controls
