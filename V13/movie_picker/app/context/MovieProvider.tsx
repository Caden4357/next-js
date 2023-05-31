import { createContext, ReactElement, ReactNode, useState} from 'react';
import { Dispatch, SetStateAction } from 'react';
type Movie = {
    imdbId: string,
    title: string,
    posterURLs: {
        original: string,
    },
    youtubeTrailerVideoLink: string,
}
type MovieType = {
    movies: Movie[],
    setMovies:  Dispatch<SetStateAction<Movie[]>>
}
export const MovieContext = createContext<MovieType>({
    movies: [],
    setMovies: () => { }
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