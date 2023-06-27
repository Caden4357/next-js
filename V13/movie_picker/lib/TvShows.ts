const API_KEY: string | undefined = process.env.NEXT_PUBLIC_API_KEY;




export default async function AllShows() {
    let url = 'https://streaming-availability.p.rapidapi.com/v2/search/pro?country=us&services=netflix%2Cprime%2Chulu&output_language=en&show_type=series&show_original_language=en&year_min=2023&year_max=2025&order_by=year&desc=true';

    try {
        if (!API_KEY) {
            throw new Error('API key is not available');
        }
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':API_KEY,
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