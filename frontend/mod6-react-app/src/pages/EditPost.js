import "./Forum.css"
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { EditPostData, getPosts} from "../services";
export default function EditPost(props){
    const [name, setName] = useState('')
	const [imageURL, setImageURL] = useState('')
	const [title, setTitle] = useState('')
	const [comments, setComments] = useState('')
	const [id, setId] = useState({id: ''})
	const [posts, setPosts] = useState([])
	const Navigate = useNavigate()


	function runFetch() {
		// console.log(window)
        let pathname = window.location.pathname
        let pathNameArray = pathname.split('/')
       	let postId = {id : pathNameArray[4]}
		setId(postId)
		getPosts().then((data) => {
			let newData = JSON.stringify(data);
			let oldData = JSON.stringify(posts);
			if (oldData !== newData) {
				setPosts(data);
	
			}
			
	}, []);
       }
	
    useEffect(() => {
		console.log("searched");
		runFetch();
	}, []);
	function EditPostHandler(event){
		event.preventDefault()
		console.log(id, 'PostId')
		EditPostData(id.id)
		Navigate('/Forum')
	}
	
	
	
    // const [data, setData] = useState({
	// 	name: "",
	// 	imageURL: "",
	// 	title: "",
	// 	comments: "",
	// })
	// data.name = name
	// data.imageURL= imageURL
	// data.title = title
	// data.comments = comments
    if(!props.loggedIn){
        return <Navigate to="/User/login" replace={true} />;
    }

	for(let post of posts){
		if(post._id === id.id){
			return (
				<>
				<div class="container">
					<div class="row">
						
						<div class="col-md-8 col-md-offset-2">
							
							<h1>Edit Post</h1>
							
							<form onSubmit={EditPostHandler} >
								
								<div class="form-group has-error">
									<label for="name">Name <span class="require">*</span> <small></small></label>
									<input type="text" class="form-control" placeholder={post.name} value={name} name="name" onChange={(e)=>{
								  setName(e.target.value)
								}} />
									<span class="help-block">Field not entered!</span>
								</div>
								<div class="form-group has-error">
									<label for="imageURL">imageURL <span class="require">*</span> <small></small></label>
									<input type="text" class="form-control" placeholder={post.imageURL} value={imageURL} name="imageURL" onChange={(e)=>{
								  setImageURL(e.target.value)
								}} />
									<span class="help-block">Field not entered!</span>
								</div>
								
								<div class="form-group">
									<label for="title">Title <span class="require">*</span></label>
									<input type="text" class="form-control" placeholder={post.title} value={title} name="title" onChange={(e)=>{
								  setTitle(e.target.value)
								}} />
								</div>
								
								<div class="form-group">
									<label for="comments">Comments</label>
									<textarea rows="5" class="form-control" placeholder={post.comments} value={comments} name="comments" onChange={(e)=>{
								  setComments(e.target.value)
								}}></textarea>
								</div>
								
								<div class="form-group">
									<p><span class="require">*</span> - required fields</p>
								</div>
								
								<div class="form-group">
									<button type="submit" class="btn btn-primary">
									   Update
									</button>
									<button class="btn btn-default">
										Cancel
									</button>
								</div>
								
							</form>
						</div>
						
					</div>
				</div>
				
				</>
				
				
					)
					
		}
	}

   



    
}