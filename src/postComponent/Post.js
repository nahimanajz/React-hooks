import React, {useState, useEffect} from 'react';
import  '../App';
import Axios from 'axios';
export default function Post()  {
    const [form, setFormData] =  useState({
      title:'',
      post:'',
      category: '',      
    });
    const [data, setData] = useState({ posts: [] });
    const url='http://localhost/laravel-rest-api/public/api/posts';  

    const savePost = async data => {
      await Axios.post(url, {
        title:data.title,
        post:data.post,
        category: data.category
      })
      .then((res)=>{
        console.log(res);
      }).catch((err)=> {
        console.log(err);
      });
    };
      useEffect(()=>{
        getPosts();
      });
      const handleDataChange = e => {
        setFormData({...form, [e.target.name]: e.target.value});
      };
      const handleFormSubmit = e => {
        e.preventDefault();
        savePost(form);
      };
      const getPosts = async () => {
        await Axios.get(url).then((res)=>{    
          setData(res.data);
        }).catch((err)=>{
          console.log(err);
        });
      }
      
    return (

        <div className="ui container">
            <form onSubmit={handleFormSubmit}>
                <label>Title: {form.title} , Post: {form.post}, category: {form.category}</label>
                <input
                    name="title"
                    type="text"
                    className="ui input"
                    value={form.title}
                    onChange={handleDataChange}
                />
                <label>Post</label>
                <textarea 
                    name="post"
                    value= {form.post}
                    onChange={handleDataChange}
                />
                <label>Category</label>
                <select value={form.category} onChange={handleDataChange} name="category">
                    <option>Sport</option>
                    <option>Politics</option>
                    <option>Entertainment</option>
                </select>
                <button type="submit"> save post</button>
            </form>         

            <div className="show-Post">
            {data.posts.map((post) => {
              return (
                <div className="post-content dark-light">
                  <h3>{post.title}</h3>
                  <p>{ post.post }</p>
                  <small>{post.category}</small>
                </div>
                
              ); 
            })}
              
           
            </div>

        </div>


        
    );
}


