import React , {useState} from 'react';
import {useStateValue} from "../StateProvider";
import "./Controls.css";
import axios from 'axios';

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


        const url = `https://us-central1-safedrug-315515.cloudfunctions.net/prediction?diagnosis=${diag_str}&procedure=${pro_str}`;
        const drugBankUrl = "https://api.drugbank.com/v1/categories/atc/";

        axios.get(url)
            .then(response => {
                if (response.data.length > 0) {
                    const drug_indices = response.data.split("-");
                    const drug_codes = drug_indices.map((item)=>
                        data["drug"].find(
                            (element)=>element["index"] === item
                        )["code"]
                    );
                    dispatch({
                        type: "drug",
                        data: drug_codes
                    });
                }
            });
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
