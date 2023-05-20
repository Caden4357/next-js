import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import axios from 'axios';
import StarWarsAPI from './APITests/starwarsAPI';
import { useState } from 'react';
import useSWR from 'swr'
import Link from 'next/link';
// export async function getStaticProps() {
//   const allPosts = [{ title: 'Hio', desc: 'dGGRRGSRGSAEG' }, { title: 'Hiffsfo', desc: 'dGGRRGSRGSAEG' }]
//   const res = await axios.get('https://swapi.dev/api/people')
//   console.log(res.data.results);
//   const data = res.data.results
//   return {
//       props: {
//           allPosts,
//           data
//       }
//   }
// }
const fetcher = (url) => (
  axios.get(url)
    .then((res) => {
      console.log(res);
      return res.data
    })
    .catch((err) => {
      console.log(err);
    })
)

export default function Home(props) {
  // const [starWarsChar, setStarWarsChar] = useState(props.data) 
  const [album, setAlbum] = useState({
    albumName:'',
    artist:'',
    releaseYear: 1900,
    genre:'Rock',
    explicit:false
  })
  const [errors, setErrors] = useState({})
  const { data, error } = useSWR('http://localhost:8000/api/allAlbums', fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  // ! Start todays lecture with displaying errors

  const changeHandler = (e) => {
      if(e.target.name === 'explicit'){
          setAlbum(prevState => ({...prevState, explicit: !prevState.explicit}))
      }
      else{
          setAlbum(prevState => ({...prevState, [e.target.name]: e.target.value}))
      }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/postAlbum', album)
        .then((res) => {
            console.log(res)
            // setAllAlbums(prevState => [...prevState, res.data])
            // navigate('/')
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors)
        })
}
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <ul>
          {data.map((album) => (
            <Link href={`/posts/${album._id}`} key={album._id}>
              <li>{album.albumName}</li>
            </Link>
            
          ))}
        </ul>
        {/* <StarWarsAPI allPosts={props.allPosts} starWarsChar={starWarsChar}/> */}
      </section>
      <form className='w-25' onSubmit={submitHandler} >
                <h2>Add to the collection! </h2>
                <label className='form-label'>Album Name:</label>
                <input type="text" name="albumName" className='form-control' onChange={changeHandler} value={album.albumName}/>
                {
                    errors.albumName?
                    <p>{errors.albumName.message}</p>:
                    null
                }
                <label className='form-label'>Artist:</label>
                <input type="text" name="artist" className='form-control' onChange={changeHandler} value={album.artist}/>
                {
                    errors.artist?
                    <p>{errors.artist.message}</p>:
                    null
                }
                <label className='form-label'>Release Year:</label>
                <input type="number" name="releaseYear" className='form-control' onChange={changeHandler} value={album.releaseYear}/>
                {
                    errors.releaseYear?
                    <p>{errors.releaseYear.message}</p>:
                    null
                }
                <label className='form-label'>Genre:</label>
                <select className="form-select" name="genre" onChange={changeHandler} value={album.genre}>
                    <option value="Rock">Rock</option>
                    <option value="Alternative">Alternative</option>
                    <option value="Hip-hop/rap">Hip-hop/rap</option>
                    <option value="Pop">Pop</option>
                    <option value="Classical">Classical</option>
                    <option value="Metal">Metal</option>
                    <option value="Blues">Blues</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Country">Country</option>
                    <option value="R&B/Soul">R&B/Soul</option>
                </select>
                {
                    errors.genre?
                    <p>{errors.genre.message}</p>:
                    null
                }
                <p className='form-check-label'>Explicit?</p>
                <input className='form-check-input' type="checkbox" name="explicit" onChange={changeHandler}/>
                <label className='form-check-label'>Yes</label>
                <br />
                {
                    errors.explicit?
                    <p>{errors.explicit.message}</p>:
                    null
                }
                <button className='btn btn-primary'>Post</button>
            </form>
    </Layout>
  );
}
// const fetcher = (url) => fetch(url).then((res) => res.json());