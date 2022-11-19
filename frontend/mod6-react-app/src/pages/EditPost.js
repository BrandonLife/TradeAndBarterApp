import "./Forum.css"
import { Navigate } from "react-router-dom";
export default function EditPost(props){

    if(!props.loggedIn){
        return <Navigate to="/User/login" replace={true} />;
    }
    return (
<>
<h1>Edit Post</h1>
<div class="card single_post">
                    <div class="body">
                        <div class="img-post">
                            <img class="d-block img-fluid" src="https://via.placeholder.com/800x280/FFB6C1/000000" alt=""/>
                        </div>
                        <h3>Title</h3>
                        <h4>Made By (author)</h4>
                        <p>Comments</p>
                    </div>
                    <div class="footer">
                        <div class="actions">
                            <a href="javascript:void(0);" class="btn btn-outline-secondary">See full post</a>
                        </div>
                    </div>
</div>
</>


    )
    
   



    
}