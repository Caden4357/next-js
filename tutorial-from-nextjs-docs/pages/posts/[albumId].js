import React from 'react'
import { useRouter } from 'next/router';
import useSWR from 'swr';
import axios from 'axios';
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

export default function AlbumId(props) {
    const router = useRouter();
    const { albumId } = router.query
    // console.log(albumId);
    const { data, error } = useSWR(`http://localhost:8000/api/oneAlbum/${albumId}`, fetcher);
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    return (
        <div>{data.albumName}</div>
    )
}
