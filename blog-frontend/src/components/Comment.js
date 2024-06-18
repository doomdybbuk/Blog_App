import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Comment.css';

const Comment = ({postId}) => {
    const [comments,setComments] = useState([]);
    const [author,setAuthor] = useState('');
    const[content,setContent] = useState('');

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/posts/${postId}/comments`)
        .then(response => setComments(response.data))
        .catch(error => console.log(error));
    },[postId]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(`http://127.0.0.1:8000/api/posts/${postId}/comments`,{author,content})
        .then(response => setComments([...comments,response.data]))
        .catch(error => console.log(error));
    };

    return (
        <div>
            <h1>Comments</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>{comment.content}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
};

export default Comment;