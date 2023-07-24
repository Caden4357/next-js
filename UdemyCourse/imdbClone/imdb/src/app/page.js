import HomepageResults from "./components/HomepageResults";

const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {
  console.log(searchParams);
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated'? 'movie/top_rated': 'trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`, {next:{revalidate:10000}});

  if(!res.ok){
    throw new Error('Failed to fetch data');
  }

  const movies = await res.json();
  console.log(movies);
  return (
    <div className="flex flex-wrap gap-10">
      <HomepageResults results={movies.results}/>
    </div>

  )
}
