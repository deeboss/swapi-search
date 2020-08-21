import axios from 'axios';

export const getCharacterSearchResults = async (query, page = '1') => {
    const response = await axios.get(`https://swapi.dev/api/people/?search=${query}&page=${page}`)
    const { count } = response.data;
    const results = response.data.results;

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

    const resolvedPromises = await Promise.all(promises);
    return [resolvedPromises, count];
}

export const getCharacterInfo = async (id) => {
    if (!id) { return {} }
    const response = await axios.get(`https://swapi.dev/api/people/${id}`);
    const data = response.data
    return {
        name: data.name,
        id,
        homeworld_url: data.homeworld,
        species_url: data.species[0],
        films_url: data.films
    }
}

export const getSpeciesInfo = async (url) => {
    if (!url) { return {} }
    const response = await axios.get(`${url}`)
    const data = response.data
    return {
        name: data.name,
    }
}

export const getHomeworldInfo = async (url) => {
    if (!url) { return {} }
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
}

export const getFilmInfo = async (url) => {
    if (!url) { return {} }
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
}