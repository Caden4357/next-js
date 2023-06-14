const API_KEY: string | undefined = process.env.NEXT_PUBLIC_API_KEY;

export default async function AllMovies() {
    try {
        if (!API_KEY) {
            throw new Error('API key is not available');
        }

        const options = {
            method: 'GET',
            url: 'https://streaming-availability.p.rapidapi.com/v2/search/pro',
            params: {
                country: 'us',
                services: 'netflix,prime,hulu',
                output_language: 'en',
                show_type: 'movie',
                show_original_language: 'en',
                order_by: 'year',
                desc: 'true'
            },
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
            }
        };

        const res = await fetch(
            url,
            options
        );

        return res.json();
    } catch (error) {
        console.log("#############", error);
    }

}