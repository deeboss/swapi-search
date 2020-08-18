import axios from 'axios';

export const getSpeciesInfo = url => {
    return axios.get(`${url}`)
        .then((response) => response.data)
        .then((data) => {
            // Species seems to be undefined for humans only
            let species = data.name;
            if (typeof species === 'undefined') {
                species = "Human"
            }

            return {
                species: species,
            }
        })
        .catch(error => { console.error(error); return Promise.reject(error); });
}

export const getHomeworldInfo = url => {
    return axios.get(`${url}`)
        .then((response) => response.data)
        .then((data) => {

            // Prettify number by adding commas after every 3 digits
            let homeworld_population = data.population;
            if (homeworld_population !== 'unknown') {
                homeworld_population = parseInt(homeworld_population).toLocaleString();
            }

            return {
                homeworld: data.name,
                homeworld_population: homeworld_population
            }
        })
        .catch(error => { console.errors(error); return Promise.reject(error); });
}