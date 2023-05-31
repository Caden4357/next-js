const url = 'https://streaming-availability.p.rapidapi.com/v2/genres';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6fe48baa96mshb163a9419d8ad01p19250bjsn43258ad3dc6c',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

export default async function GetGenres() {
    const res = await fetch(url, options)
    if (!res.ok) {
        throw new Error('Something went wrong while fetching Genres')
    }
    return res.json()
}