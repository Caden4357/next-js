import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


export default function PostId() {
    const [post, setPost] = useState({})
    const router = useRouter();
    const { postId } = router.query
    useEffect(() => {
        if(router.isReady){
            fetch(`/api/${postId}`)
                .then(res => res.json())
                .then(data => setPost(data[0]))
        }
    },[router.isReady])

    return (
        <div>
            <Link href={'/posts/allPosts'}>Back</Link>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </div>
    )
}
