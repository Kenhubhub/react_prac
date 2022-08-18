import {useState} from 'react';
import {useHistory} from 'react-router-dom'
const Create = () => {
    const [title,setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = e => {
        e.preventDefault();
        const blog = {
            title,
            body,
            author
        };
        setIsPending(true);
        fetch(`http://localhost:8000/blogs`,{
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify(blog)
        }).then(()=>{
            console.log("blog added");
            setIsPending(true);
            history.push("/");
        })
       setTitle("");
       setBody("");
       setAuthor("");
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" value = {title} 
                onChange={e => setTitle(e.target.value)}required />
                <label >Blog body:</label>
                <textarea value={body} onChange = {e=>{
                    setBody(e.target.value);
                }}cols="30" rows="10" required>

                </textarea>
                <label htmlFor="">Blog Author</label>
                <input type="text" value={author} 
                onChange = {e=>{setAuthor(e.target.value)}}/>
                
                {!isPending && <button>Add blog</button>}
                {isPending && <button>Adding blog....</button>}    
                
                
            </form>
        </div>
     );
}
 
export default Create;