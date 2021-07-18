import axios from 'axios';

const url = "https://api.drugbank.com/v1/categories/atc/";
code = "41071";

axios.get(url + code)
            .then(response => {
                if (response.data.length > 0) {
                    console.log(response.data);
                }
            });