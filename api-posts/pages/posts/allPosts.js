import Link from 'next/link';
import React, {useState, useEffect} from 'react'

export default function allPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('/api/hello')
            .then(res => res.json())
            .then(data => setPosts(data))
    },[])
    return (
        <div>
            <Link href={'/'}>Home</Link>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`}><h2>Title: {post.title}</h2></Link>
                        <p>{post.body}</p>
                        <br />
                    </div>
                ))
            }
        </div>
    )
}
