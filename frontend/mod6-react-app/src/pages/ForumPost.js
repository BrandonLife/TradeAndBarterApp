import "./Forum.css"
import { Navigate } from "react-router-dom";
import { useEffect , useState} from "react";
import {DeletePostData} from "../services";

export default function ForumPost(props){

    const [posts, setPosts] = useState([])
    
    let postId=''
    function runFetch() {
	let pathname = window.location.pathname
    let pathNameArray = pathname.split('/')
    postId = pathNameArray[2]
   }
   function DeleteHandler(){
    DeletePostData(postId)
   return <Navigate to='/Forum' />
    
    }
	useEffect(() => {
		console.log("searched");
		runFetch();
	}, []);





    if(!props.loggedIn){
        return <Navigate to="/User/login" replace={true} />;
    }
    return (

<>
<h1>Post</h1>
<div class="card single_post" key={posts._id}>
                    <div class="body">
                        <div class="img-post" >
                            <img class="d-block img-fluid" src={posts.imageURL} alt=""/>
                        </div>
                        <h3>{posts.title}</h3>
                        <h4>Made by {posts.name}</h4>
                        <p>{posts.comments}</p>
                    </div>
                    <div class="footer">
                        <div class="actions">
                            <a href="javascript:void(0);" class="btn btn-outline-secondary">See full article</a>
                        </div>
                        <div class="actions">
                            <a onClick={DeleteHandler} id="DeleteBtn" class="btn btn-outline-secondary">Delete</a>
                        </div>
                    </div>
</div>
</>


    )
    
   
}