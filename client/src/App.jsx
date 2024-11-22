import React, { useState, useRef, useEffect } from 'react';
import BlogList from './Bloglist';
import Header from './Header';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {

  const [blogPosts, setBlogPosts] = useState([]);
  const [allBlogPosts, setAllBlogPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  useEffect (()=>{
    Axios.get("http://localhost:5001/").then((res) => {
        setBlogPosts(res.data);
        setAllBlogPosts(res.data);
    });

    
  },[]);



  const titelRef = useRef();
  const contentRef = useRef();
  const categoryRef = useRef();


  function addPost(event) {
    event.preventDefault();

    const newPost = {
      titel: titelRef.current.value,
      content: contentRef.current.value,
      category: categoryRef.current.value
    };
  
    Axios.post("http://localhost:5001/", newPost).then((response) => {
      console.log(response);
    })

    const next = [...blogPosts, newPost];
    setBlogPosts(next);
    setAllBlogPosts(next);

    titelRef.current.value = '';
    contentRef.current.value = '';
    categoryRef.current.value = 'Wähle eine Kategorie aus';
  }

  function filterPosts(category) {
    setSelectedCategory(category);
    if (category==="Alle") {
      setBlogPosts(allBlogPosts);
    }
    else {
        const testPosts = allBlogPosts;
        const filteredPosts = testPosts.filter((post) => post.category === category);
        setBlogPosts(filteredPosts);
    }
    

  }

  return (
    
    <div>
      <Header filterPosts={filterPosts} selectedCategory={selectedCategory}/>
      <form onSubmit={addPost}>
        <div className="form-group my-2">
            <label htmlFor="exampleFormControlInput1">Titel des Blogs</label>
            <input 
                type="text" 
                name="titel" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Titel"
                ref={titelRef}
            />
        </div>
        <div className="form-group my-2">
            <label htmlFor="exampleFormControlTextarea1">Inhalt des Blogs</label>
            <textarea
                className="form-control" 
                name="inhalt" 
                id="exampleFormControlTextarea1" 
                rows="4"
                ref={contentRef}
            ></textarea>
        </div>
        <select class="form-select" aria-label="Default select example" ref={categoryRef}>
          <option selected>Wähle eine Kategorie aus</option>
          <option value="Technologie">Technologie</option>
          <option value="Design">Design</option>
          <option value="Kultur">Kultur</option>
          <option value="Business">Business</option>
          <option value="Politik">Politik</option>
          <option value="Wissenschaft">Wissenschaft</option>
          <option value="Gesundheit">Gesundheit</option>
          <option value="Mode">Mode</option>
          <option value="Reisen">Reisen</option>
        </select>
        
        <input type="submit" value="Erstellen" className="btn btn-primary my-2"/>
        
      </form>

    
      {blogPosts.map((blogPost, index) => (
        <BlogList titel={blogPost.titel} content={blogPost.content} category={blogPost.category}/>
      ))}
    
    </div>
  );
}

export default App;

