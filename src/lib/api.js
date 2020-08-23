import axios from 'axios';

export const searchCharacter = async (query) => {
    const response = await axios.get(`https://swapi.dev/api/people/?search=${query}`);
    const { results, count, next, previous } = response.data;
    const characters = results.map((result) => ({
        name: result.name,
        id: result.url.split('/')[5],
        homeworld_url: result.homeworld,
        species_url: result.species[0]
    }));
    return { characters, count, next, previous };
}

export const getPageResults = async (pageUrl) => {
    const response = await axios.get(pageUrl);
    const { results, next, previous } = response.data;
    const characters = results.map((result) => ({
        name: result.name,
        id: result.url.split('/')[5],
        homeworld_url: result.homeworld,
        species_url: result.species[0]
    }));
    return { characters, next, previous };
}

export const getCharacterInfo = async (id, cancelToken) => {
    const response = await axios.get(`https://swapi.dev/api/people/${id}`, {
        cancelToken: cancelToken
    });
    const data = response.data
    return {
        name: data.name,
        id,
        homeworld_url: data.homeworld,
        species_url: data.species[0],
        films_url: data.films
    }
}

export const getSpeciesInfo = async (url, cancelToken) => {
    const response = await axios.get(`${url}`, {
        cancelToken: cancelToken
    });
    const data = response.data
    return {
        name: data.name,
    }
}

export const getHomeworldInfo = async (url, cancelToken) => {
    const response = await axios.get(`${url}`, {
        cancelToken: cancelToken
    });
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
}

export const getFilmInfo = async (url, cancelToken) => {
    if (!url) { return {} }
    const response = await axios.get(`${url}`, {
        cancelToken: cancelToken
    });
    const data = response.data
    // Clip opening crawl to first 150 characters
    const opening_crawl = data.opening_crawl.substring(0, 150);
    return {
        title: data.title,
        release_date: data.release_date,
        opening_crawl: opening_crawl
    }
}