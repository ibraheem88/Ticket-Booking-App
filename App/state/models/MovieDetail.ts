import { Genre } from "./Genre";
import { Movie } from "./Movie";

export interface MovieDetail extends Movie {
    overview: string,
    genres: Genre[],
    backdrop_path: string,
    status: 'Released'
}