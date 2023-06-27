import { createContext, ReactElement, ReactNode, useState} from 'react';
import { Dispatch, SetStateAction } from 'react';

export type Show = {
    title: string,
    overview: string,
    streamingInfo: {
        us:{
            netflix: boolean,
            hulu: boolean,
            prime: boolean,
            disney: boolean,
        }
    },
    cast: Array<string>,
    imdbId: string,
    imbdRating: number,
    backdropURLs: {
        original: string,
    }
}
export type ShowType = {
    shows: Show[],
    setShows:  Dispatch<SetStateAction<Show[]>>,
    cursor?: string,
}
export const ShowContext = createContext<ShowType>({
    shows: [],
    setShows: () => { },
});
type ChildrenType = {
    children?: ReactNode
}

export const ShowProvider = ({ children }: ChildrenType): JSX.Element => {
    const [shows, setShows] = useState<Show[]>([]);
    return (
        <ShowContext.Provider value={{ shows, setShows }}>
            {children}
        </ShowContext.Provider>
    )
}