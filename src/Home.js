import { useState,useEffect } from "react"
import BlogList  from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My new website", body: "lorem ipsum...", author: "mario", id:1},
        {title: "Gichi", body: "lorem ipsum...", author: "mario", id:2},
        {title: "Gachi", body: "lorem ipsum...", author: "hichibi", id:3},
        
    ]);
    const handleDelete = (id) => {
       const newBlogs = blogs.filter(blog => blog.id !== id);
       setBlogs(newBlogs);
    }
    useEffect(()=>{
        console.log("yes yes yes")
    },[])
    return (  
        <div className="home" >
          <BlogList blogs={blogs} title={"All blogs"} handleDelete = {handleDelete}/>
        </div>
    );
}
 
export default Home;