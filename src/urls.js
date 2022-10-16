import { API_KEY } from "./constants/constants"

export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const horror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const documentaries = `discover/movie?api_key=${API_KEY}&with_genres=99`