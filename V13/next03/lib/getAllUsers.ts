
// export default async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     if (!response.ok) {
//         throw new Error('Something went wrong while fetching users')
//     }
//     return response.json()
// }


const url = 'https://streaming-availability.p.rapidapi.com/v2/services';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6fe48baa96mshb163a9419d8ad01p19250bjsn43258ad3dc6c',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

export default async function getAllUsers() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}