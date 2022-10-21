import React from "react";
import create from 'zustand'

function Home({ posts }: {posts: any}) {

    return (
        <ul>
            {posts.map((post: any) => (
                <li>{post.name}</li>
            ))}
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