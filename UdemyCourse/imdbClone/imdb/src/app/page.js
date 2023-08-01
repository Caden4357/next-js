import HomepageResults from "./components/HomepageResults";

const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {
  console.log(searchParams);
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated'? 'movie/top_rated': 'trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`, {next:{revalidate:10000}});
  console.log(res);
  if(!res.ok){
    throw new Error('Failed to fetch data');
  }

  const movies = await res.json();

  return (
    <div className="flex flex-wrap gap-10 w-10/12 mx-auto">
      <HomepageResults results={movies.results}/>
    </div>

  )
}
