import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
export const metadata: Metadata = {
    title: "Users",
}

export default async function UsersPage() {
    const usersData: Promise<result[]> = getAllUsers();
    const users = await usersData;
    console.log("##########", users);
    console.log("Hello from UsersPage");
    const content = (
        <section>
            <h2>
                <Link href="/">Home</Link>
            </h2>
            <br />
            {/* {
                users.length > 0 && users.map((user) => (
                    <div key={user.id}>
                        <p>
                            <Link href={`/users/${user.id}`}>   
                                {user.name}
                            </Link>
                        </p>
                    </div>
                ))
            } */}
        </section>
    )
    return content;
}
