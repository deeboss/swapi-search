import { getSpeciesInfo, getHomeworldInfo, getFilmInfo } from './api';

export const sortByDescending = (obj) => {
    return obj.sort((a, b) => {
        return Date.parse(b.release_date) - Date.parse(a.release_date);
    });
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