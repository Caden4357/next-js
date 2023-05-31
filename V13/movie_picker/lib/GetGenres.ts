const url = 'https://streaming-availability.p.rapidapi.com/v2/genres';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

// export default async function GetGenres() {
//     const res = await fetch(url, options)
//     if (!res.ok) {
//         throw new Error('Something went wrong while fetching Genres')
//     }
//     return res.json()
// }