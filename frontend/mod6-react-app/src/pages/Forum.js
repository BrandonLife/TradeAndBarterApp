import "./Forum.css"
import {addPost, createPosts, getPosts, getUser } from "../services"
import { Navigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Forum(props){
    const [postData, setPostData] = useState();
    const [posts, setPosts] = useState([])
    
    function runFetch(){
        getPosts().then((data) => {
           
				let newData = JSON.stringify(data);
				let oldData = JSON.stringify(postData);
				if (oldData !== newData) {
					setPosts(data);
				}
                
	    }, []);
    }
    if(!props.loggedIn){
        return <Navigate to="/User/login" replace={true} />;
    }
    // let loadArray=[runFetch]
    function loadPosts(event){
        // for(let i=0; i<= loadArray.length; i++){
        //     runFetch()
        //     break;
        // }
        // console.log('running')
        let loadPostBtn = document.getElementById('load-post')
        loadPostBtn.addEventListener(('click'), ()=>{
            runFetch()
        })
    }
  
	const postsArray = posts.map((postData,index) => {
        
		return (
            <div class="card single_post">
                <div class="body">
                    <div class="img-post">
                        <img class="d-block img-fluid" src={postData.imageURL} alt=""/>
                    </div>
                    <h3>{postData.title}</h3>
                    <h4>Made by {postData.name}</h4>
                    <p>{postData.comments}</p>
                </div>
                <div class="footer">
                    <div class="actions">
                        <a class="btn btn-outline-secondary">See full article</a>
                    </div>
                    
                </div>
        </div>

            
		);
	});
    if(postsArray.length !==0){
        return(
            // <body onLoad={loadPosts()}>

            
<div id="main-content" class="blog-page">
    <div class="container">
        <div class="row clearfix">
            <div class="col-lg-8 col-md-12 left-box">
              <div>
               {postsArray}
               <button onClick={loadPosts} id="load-post">Load Posts</button>
               <button><Link to="/Forum/create/Post">Create new Post</Link></button>
              </div>
                
         
                       
                <ul class="pagination pagination-primary">
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
                </ul>                
            </div>
            <div class="col-lg-4 col-md-12 right-box">
                <div class="card">
                    <div class="body search">
                        <div class="input-group m-b-0">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa fa-search"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Search..."/>                                    
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
// </body>
        )
    }else if(postsArray.length===0){
        return (
            // <body onLoad={loadPosts()}>
<div id="main-content" class="blog-page">
    <div class="container">
        <div class="row clearfix">
            <div class="col-lg-8 col-md-12 left-box">
            <div>
               <p>Sorry no posts to display</p>
               <button onClick={loadPosts} id="load-post">Load Posts</button>
                <button><Link to="/Forum/create/Post">Create Post</Link></button>
              </div>
         
                       
                <ul class="pagination pagination-primary">
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
                </ul>                
            </div>
            <div class="col-lg-4 col-md-12 right-box">
                <div class="card">
                    <div class="body search">
                        <div class="input-group m-b-0">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa fa-search"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Search..."/>                                    
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
// </body>
 )
                }    
}