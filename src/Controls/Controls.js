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