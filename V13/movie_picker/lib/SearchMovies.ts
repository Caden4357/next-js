// console.log("#############", process.env.NEXT_PUBLIC_API_KEY);
const API_KEY: string | undefined = process.env.NEXT_PUBLIC_API_KEY;
console.log("GERE");
const url = 'https://streaming-availability.p.rapidapi.com/v2/search/title?title=batman&country=us&show_type=movie&output_language=en';

export default async function SearchMovies(search: string) {
    try {
        console.log("API_KEY", API_KEY);
        if (!API_KEY) {
            throw new Error('API key is not available');
        }

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
            }
        };

        console.log("HERE");
        const res = await fetch(
            `https://streaming-availability.p.rapidapi.com/v2/search/title?title=${search}&country=us&show_type=movie&output_language=en`,
            options
        );

        if (!res.ok) {
            throw new Error('Something went wrong while fetching Movies');
        }

        return res.json();
    } catch (error) {
        console.log("#############", error);
    }

}