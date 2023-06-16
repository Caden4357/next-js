import { createContext, ReactElement, ReactNode, useState} from 'react';
import { Dispatch, SetStateAction } from 'react';
export type Movie = {
    imdbId: string,
    title: string,
    posterURLs: {
        original: string,
    },
    youtubeTrailerVideoLink: string,
}
export type MovieType = {
    movies: Movie[],
    setMovies:  Dispatch<SetStateAction<Movie[]>>,
    cursor?: string,
}
export const MovieContext = createContext<MovieType>({
    movies: [],
    setMovies: () => { },
});

type ChildrenType = {
    children?: ReactNode
}

export const MovieProvider = ({ children }: ChildrenType): JSX.Element => {
    const [movies, setMovies] = useState<Movie[]>([]);
    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    )
}