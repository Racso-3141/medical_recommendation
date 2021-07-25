import React , {useState} from 'react';
import {useStateValue} from "../StateProvider";
import "./Controls.css";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { GiPill } from 'react-icons/gi';
import { GrPowerReset } from 'react-icons/gr';
import { Label } from '@material-ui/icons';

function Controls({data}) {
    const [state, dispatch] = useStateValue();

    const handleGenerateClick = () => {
        const diagnoses = state["diagnosis"];
        const procedures = state["procedure"];

        const diagnosis_indices = diagnoses.map((item)=>
            data["diagnosis"].findIndex(
                (element)=>element["name"] === item
            )
        );


        const procedure_indices = procedures.map((item)=>
            data["procedure"].findIndex(
                (element)=>element["name"] === item
            )
        );


        diagnosis_indices.sort();
        procedure_indices.sort();


        const diag_str = diagnosis_indices.join("-");
        const pro_str = procedure_indices.join("-");


        const url = `https://us-central1-safedrug-315515.cloudfunctions.net/prediction?diagnosis=${diag_str}&procedure=${pro_str}`;
        const drugBankUrl = "https://api.drugbank.com/v1/categories/atc/";

        axios.get(url)
            .then(response => {
                if (response.data.length > 0) {
                    const drug_indices = response.data.split("-");
                    const drug_names = drug_indices.map((item)=>
                        data["drug"][parseInt(item)]["name"]
                    );
                    dispatch({
                        type: "drug",
                        data: drug_names
                    });
                }
            });
    };

    const handleResetClick = () => {
        dispatch({
            type: "reset"
        });
        
    };

    return (
        <div className = "generate-reset">
            <GiPill onClick={handleGenerateClick} id="generate" size={70}/>
            <GrPowerReset onClick={handleResetClick} id="reset" size={50}/>
        </div>
    )
}

export default Controls