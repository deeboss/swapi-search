import axios from 'axios';

export const getSpeciesInfo = url => {
    return axios.get(`${url}`)
        .then((response) => response.data)
        .then((data) => {
            // If the species field is undefined, it seems to mean they are humans
            let species = data.name;
            if (typeof species === 'undefined') {
                species = "Human"
            }

            return {
                species: species,
            }
        })
        .catch(error => {
            console.log("there's an error with the getSpeciesInfo promise!");
            console.error(error);
            return Promise.reject(error);
        });
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
        .catch(error => {
            console.log("there's an error with the getHomeworldInfo promise!");
            console.errors(error);
            return Promise.reject(error);
        });
}

export const getFilmInfo = url => {
    return axios.get(`${url}`)
        .then((response) => response.data)
        .then((data) => {

            // Clip opening crawl to first 150 characters
            const clipped_opening_crawl = data.opening_crawl.substring(0, 150);

            return {
                title: data.title,
                release_date: data.release_date,
                opening_crawl: data.opening_crawl,
                clipped_opening_crawl: clipped_opening_crawl
            }
        })
        .catch(error => { console.errors(error); return Promise.reject(error); });
}