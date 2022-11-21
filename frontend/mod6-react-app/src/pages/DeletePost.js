import "./Forum.css"
import { Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import {DeletePostData, getPosts, getOnePost} from '../services';//need to change service
export default function DeletePost(props){

    const [name, setName] = useState('')
	const [imageURL, setImageURL] = useState('')
	const [title, setTitle] = useState('')
	const [comments, setComments] = useState('')
	const[postData,setPostData] = useState([])
	const[posts, setPosts] = useState([])
	const [_id, setID] = useState('')
		
	
	
		
	
	
useEffect(()=>{
		
		getOnePost().then((data) => {
            console.log(data)
			// let newData = JSON.stringify(data);
			// setPosts(newData);
			// DeletePostData(newData)
		});
	
	},[])
  
    if(!props.loggedIn){
        return <Navigate to="/User/login" replace={true} />;
    }
	
    return (
		<div>
<h1>Delete Post</h1>
<form>
<div class="card single_post" key={_id}>
                    <div class="body">
                        <div class="img-post">
                            <img class="d-block img-fluid" src={imageURL} alt=""/>
                        </div>
                        <h3>{title}</h3>
                        <h4>Made by {name}</h4>
                        <p>{comments}</p>
                    </div>
                    <div class="footer">
                        <div class="actions">
                            <a href="javascript:void(0);" class="btn btn-outline-secondary">See full article</a>
                        </div>
                    </div>
					<button type="submit">Delete</button>
</div>
</form>

</div>
    )
    
   



    
}