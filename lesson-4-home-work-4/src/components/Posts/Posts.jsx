import { useState, useEffect } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                const data = await response.json();
                setPosts(data);
            }
            catch (error) {
                console.error(error.message);
            }
        }
        getPosts();
    }, [])
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h1>Posts:</h1>
            </div>
        </div>
        {posts.map((post) => (
            <div key={post.id} className='col-12 mt-12'>
                <div className='card mb-3'>
                    <div className='card-body'>
                        <h3 className='card-title'>{post.title}</h3>
                        <p className='card-text'>Description: {post.body} </p>
                    </div>
                </div>
            </div>
        ))}

          
    </div>
  )
}

export default Posts;