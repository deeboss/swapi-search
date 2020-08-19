import axios from 'axios';
import { checkIfEmptyArr } from '../lib/util';

export const getCharacterSearchResults = async (query) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/people/?search=${query}`)
        const results = response.data.results;
        // For pagination
        // const { count, next, previous } = response.data;
        const promises = results.map((i) => {
            // Get ID of character for dynamic character page rendering
            const id = i.url.split('/')[5];
            return {
                name: i.name,
                id: id,
                homeworld_url: i.homeworld,
                species_url: i.species[0]
            }
        });

        return await Promise.all(promises);

    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}

export const getCharacterInfo = async (id) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}`);
        const data = response.data
        const name = data.name;
        return {
            name: name
        }
    } catch (error) {
        console.log("there's an error with the getCharacterInfo");
        console.error(error);
        return Promise.reject(error);
    }
}

export const getSpeciesInfo = async (url) => {
    try {
        if (!checkIfEmptyArr(url)) {
            return {}
        }
        const response = await axios.get(`${url}`)
        const data = response.data
        return {
            species: data.name,
        }
    } catch (error) {
        console.log("there's an error with the getSpeciesInfo");
        console.error(error);
        return Promise.reject(error);
    }
}

export const getHomeworldInfo = async (url) => {
    try {
        if (!checkIfEmptyArr(url)) {
            return {}
        }
        const response = await axios.get(`${url}`)
        const data = response.data
        // Prettify number by adding commas after every 3 digits
        let population = data.population;
        if (population !== 'unknown') {
            population = parseInt(population).toLocaleString();
        }
        return {
            name: data.name,
            population: population
        }
    } catch(error) {
        console.log("there's an error with the getHomeworldInfo");
        console.error(error);
        return Promise.reject(error);

    }
}

export const getFilmInfo = async (url) => {
    try {
        if (!checkIfEmptyArr(url)) {
            return {}
        }
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
        console.log("there's an error with the getFilmInfo");
        console.error(error);
        return Promise.reject(error);
    }
}