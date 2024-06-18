import React , {useState,useEffect} from 'react';
import axios from 'axios';

const Post = () => {
    const [posts,setPosts] = useState([]);
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/posts/')
            .then(response=> setPosts(response.data))
            .catch(error => console.log(error));
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/posts',{title,content,author})
        .then(response => setPosts([...posts,response.data]))
        .catch(error=> console.error(error));
    };

    return(
        <div>
            <h1>Post</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
            <button type="submit">Add Post</button>
            </form>
        </div>
    );
};

export default Post;