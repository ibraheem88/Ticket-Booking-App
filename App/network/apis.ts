import { callback, errorCallback } from "../helpers/types"
import { BaseUrl } from "./base"

export const GetUpcomingMovies = '/movie/upcoming?language=en-US'
export const GetGenre = '/genre/movie/list?language=en'
export const DiscoverMovies = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
export const SearchMovies = '/search/movie'
export const MovieDetail = '/movie'

export const getDataAuth = (URL: string, callback: callback, errorcallback: errorCallback) => {
    //console.log(BaseUrl + URL)
    fetch(BaseUrl + URL, {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2QyODFjMzBlN2NjNzdlMjc2OGVmOTgyOTI5YjgzOCIsInN1YiI6IjY1YmUxNzdjOTAyMDEyMDE3Y2NhZWJjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v8oeg5Z9b_qWDnjlP3KLhb3IAZ9cxhjrSAe7okkEOHk"
        }
    }).then(res => res.json())
        .then(res => {
            if (callback !== null) {
                callback(res)
            }
        })
        .catch(err => {
            if (errorcallback !== null) {
                errorcallback(err)
            }
        })
}