import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import UserPosts from "./components/UserPosts"
import { Suspense } from "react"
type Params = {
    params: {
        userId: string
    }
}

export default async function UserPage({ params: {userId} }: Params) {
    const userData: Promise<User> = getUser(userId)
    const userPostsData: Promise<Post[]> = getUserPosts(userId)
    
    // const [userData, userPostsData] = await Promise.all([user, userPosts])
    
    const user = await userData;
    
    return (
        <>
            <h1>{user.name}</h1>
            <br />
            <Suspense fallback={<h2>Loading....</h2>}>
                {/* @ts-expect-error Server Component*/}
                <UserPosts promise={userPostsData} />
            </Suspense>
        </>
    )
}
