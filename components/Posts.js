import Post from "./Post"


const posts =[
    {
        id: "123",
        username: "lial",
        userImg:"https://avatars.githubusercontent.com/u/13840191?v=4",
        img:"https://avatars.githubusercontent.com/u/13840191?v=4",
        caption:"yo",
    },
    {
        id: "123",
        username: "lial",
        userImg:"https://avatars.githubusercontent.com/u/13840191?v=4",
        img:"https://avatars.githubusercontent.com/u/13840191?v=4",
        caption:"yo",
    },

];

function Posts() {
    return (
        <div>
            {/*posts*/}
            {posts.map((post)=>(
                <Post 
                key={post.id} 
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}

                />
            ))}

        </div>
    )
}

export default Posts
