type Props = {
    promise: Promise<Post[]>
}
import React from 'react'

export default async function UserPosts({ promise }: Props) {
    const posts = await promise;
    const contnent = posts.map(post => <div key={post.id}><h1>{post.title}</h1>  <p>{post.body}</p></div>)
    return contnent;
}
