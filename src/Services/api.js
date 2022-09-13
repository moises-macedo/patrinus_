import axios from "axios";

export const apiPatrinus = axios.create({
    baseURL: "https://api-patrinus.herokuapp.com/"
});

export const apiReceita = axios.create({
    baseURL: 'https://www.receitaws.com.br/v1/cnpj'
})