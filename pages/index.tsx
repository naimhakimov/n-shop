import { Input, Switch } from "@nextui-org/react";

function Home({ posts }: { posts: any }) {
    if (!posts) {
        return null
    }
    return (
        <ul>
            {posts.map((post: any) => (
                <li key={post._id}>{post.name}</li>
            ))}
            <Switch checked={true} id={'werwerwe'} />
            <Input id={'werwer'} label={'werwerew'} />
        </ul>
    )
}

export async function getStaticProps() {
    const res = await fetch('http:localhost:3000/api/products?page=1&size=10')
    const posts = await res.json()
    return {
        props: {
            posts
        },
    }
}

export default Home