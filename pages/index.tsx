import React from "react";
import { Input, Switch } from "@nextui-org/react";

function Home({ posts }: {posts: any}) {

    return (
        <ul>
            {posts.map((post: any) => (
                <li key={post._id}>{post.name}</li>
            ))}
            <Switch checked={true} id={'werwerwe'} />
            <Input  id={'werwer'} label={'werwerew'}/>
        </ul>
    )
}

export async function getStaticProps() {
    const res = await fetch('http:localhost:3000/api/products')
    const posts = await res.json()
    return {
        props: {
            posts,
        },
    }
}

export default Home