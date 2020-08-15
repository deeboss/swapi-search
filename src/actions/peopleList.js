import axios from "axios";

export const fetchPeople = () => {
    axios.get(`https://swapi.dev/api/people`).then((response) => {
        const people = response.data.results;
        console.log(people);
    })
}

export const searchPerson = (query) => {
    axios.get(`https://swapi.dev/api/people/?search=${query}`)
        .then((response) => {
            const results = response.data.results;
            console.log(results);
            console.log(typeof results);
        })
}