
const url = 'https://streaming-availability.p.rapidapi.com/v2/search/title?title=batman&country=us&show_type=movie&output_language=en';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6fe48baa96mshb163a9419d8ad01p19250bjsn43258ad3dc6c',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
};

export default async function SearchMovies(search: string) {
    const res = await fetch(`https://streaming-availability.p.rapidapi.com/v2/search/title?title=${search}&country=us&show_type=movie&output_language=en`, options)
    if (!res.ok) {
        throw new Error('Something went wrong while fetching Movies')
    }
    return res.json()
}