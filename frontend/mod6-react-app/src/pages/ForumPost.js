import "./Forum.css"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect , useState} from "react";
import {DeletePostData, getOnePost, getPosts} from "../services";

export default function ForumPost(props){
   
    const [posts, setPosts] = useState([])
    const [postUrlId, setPostUrlId] = useState('')
    const Navigate = useNavigate()
  
    let postId=''
    function runFetch() {
    let pathname = window.location.pathname
    let pathNameArray = pathname.split('/')
    postId = pathNameArray[2]
    setPostUrlId(postId)
    // getOnePost(postUrlId)
    getPosts().then((data) => {
        let newData = JSON.stringify(data);
        let oldData = JSON.stringify(posts);
        if (oldData !== newData) {
            setPosts(data);

        }
        
}, []);
   }
   
   
   
   function DeleteHandler(){
    DeletePostData(postUrlId)
    Navigate('/Forum')
    }
	useEffect(() => {
		console.log("searched");
		runFetch();
	}, []);


if(!props.loggedIn){
        return <Navigate to="/User/login" replace={true} />;
    }

    console.log(posts)
//need to find out why Navigate is not taking the user back to the Forum Page
    for(let post of posts){
        if(post._id === postUrlId){
            return (

                <>
                <h1>Post</h1>
                <div class="card single_post" key={post._id}>
                                    <div class="body">
                                        <div class="img-post" >
                                            <img class="d-block img-fluid" src={post.imageURL} alt=""/>
                                        </div>
                                        <h3>{post.title}</h3>
                                        <h4>Made by {post.name}</h4>
                                        <p>{post.comments}</p>
                                    </div>
                                    <div class="footer">
                                        <div class="actions">
                                            <Link href="javascript:void(0);" class="btn btn-outline-secondary">See full article</Link>
                                        </div>
                                        <div class="actions">
                                            <Link onClick={DeleteHandler} id="DeleteBtn" class="btn btn-outline-secondary">Delete</Link>
                                        </div>
                                        <div class="actions">
                                            <Link to={`/Forum/edit/Post/${postUrlId}`} id="DeleteBtn" class="btn btn-outline-secondary">Edit</Link>
                                        </div>
                                    </div>
                </div>
                </>
                
                
                    )
                    
        }
    }
     
   
   
}