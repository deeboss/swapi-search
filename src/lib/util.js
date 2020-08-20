import { getSpeciesInfo, getHomeworldInfo, getFilmInfo } from './api';

export const checkIfEmptyArr = (arr) => {
    if (arr.length < 1) {
        return false;
    }
    return true;
}

export const sortByDescending = (obj) => {
    // Strip out hyphens from 'release_date',
    // Convert from string to integer, store as 'converted'
    obj.map((i) => {
        i.converted = Number(i.release_date.replace(/-/g, ""));
    })

    // Sort by descending order based on value of 'converted'
    obj.sort((a, b) => {
        return b.converted - a.converted;
    });
    
    return obj
}

export const retrieveBasicCharacterInfo = async (data) => {
    try {
        const species = await getSpeciesInfo(data.species_url);
        const homeworld = await getHomeworldInfo(data.homeworld_url);
        return {
            name: data.name,
            id: data.id,
            homeworld_name: homeworld.name,
            homeworld_population: homeworld.population,
            species: species.name,
            films_arr: data.films_arr
        }
    } catch (error) {
        console.log("there's an error with getBasicInfo");
        console.error(error);
        return Promise.reject(error);
    }
}

export const retrieveFilmDetails = async (data) => {
    try {
        const requests = data.films_arr.map(async (film) => {
            return await getFilmInfo(film);
        });
        return await Promise.all(requests);

    } catch (error) {
        console.log("there's an error with getFilmDetails");
        console.error(error);
        return Promise.reject(error);
    }
}