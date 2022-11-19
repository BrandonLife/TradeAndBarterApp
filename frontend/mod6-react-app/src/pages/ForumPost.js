import "./Forum.css"
import { Navigate } from "react-router-dom";
export default function ForumPost(props){

    if(!props.loggedIn){
        return <Navigate to="/User/login" replace={true} />;
    }
    return (
<>
<h1>Post</h1>
<div class="card single_post">
                    <div class="body">
                        <div class="img-post">
                            <img class="d-block img-fluid" src={props.imageURL} alt=""/>
                        </div>
                        <h3>{props.title}</h3>
                        <h4>Made by {props.name}</h4>
                        <p>{props.comments}</p>
                    </div>
                    <div class="footer">
                        <div class="actions">
                            <a href="javascript:void(0);" class="btn btn-outline-secondary">See full article</a>
                        </div>
                    </div>
</div>
</>


    )
    
   



    
}