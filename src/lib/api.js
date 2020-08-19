import axios from 'axios';

export const getSpeciesInfo = async (url) => {
    try {
        const response = await axios.get(`${url}`)
        const data = response.data
        // If the species field is undefined, it seems to mean they are humans
        let species = data.name;
        if (typeof species === 'undefined') {
            species = ""
        }
        return {
            species: species,
        }
    } catch (error) {
        console.log("there's an error with the getSpeciesInfo promise!");
        console.error(error);
        return Promise.reject(error);
    }
}

export const getHomeworldInfo = async (url) => {
    try {
        const response = await axios.get(`${url}`)
        const data = response.data
        // Prettify number by adding commas after every 3 digits
        let homeworld_population = data.population;
        if (homeworld_population !== 'unknown') {
            homeworld_population = parseInt(homeworld_population).toLocaleString();
        }
        return {
            homeworld: data.name,
            homeworld_population: homeworld_population
        }
    } catch(error) {
        console.log("there's an error with the getHomeworldInfo promise!");
        console.errors(error);
        return Promise.reject(error);

    }
}

export const getFilmInfo = async (url) => {
    try {
        const response = await axios.get(`${url}`)
        const data = response.data
        // Clip opening crawl to first 150 characters
        const clipped_opening_crawl = data.opening_crawl.substring(0, 150);
        return {
            title: data.title,
            release_date: data.release_date,
            opening_crawl: data.opening_crawl,
            clipped_opening_crawl: clipped_opening_crawl
        }
    } catch(error) {
        console.errors(error);
        return Promise.reject(error);
    }
}