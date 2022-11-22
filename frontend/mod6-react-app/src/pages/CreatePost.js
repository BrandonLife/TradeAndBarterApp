import './CreatePost.css'
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react';
import {createNewPost} from '../services';


export default function CreatePost(props){
	const [name, setName] = useState('')
	const [imageURL, setImageURL] = useState('')
	const [title, setTitle] = useState('')
	const [comments, setComments] = useState('')
	const Navigate= useNavigate()
		
		
	const [data, setData] = useState({
		name: "",
		imageURL: "",
		title: "",
		comments: "",
	})
	data.name = name
	data.imageURL= imageURL
	data.title = title
	data.comments = comments
	if(!props.loggedIn){
		return <Navigate to="/User/login" replace={true} />;
	}
	function createNewPostHandler(event){
		event.preventDefault()
		const newData = {...data}
		setData(newData)
		createNewPost(newData)
		Navigate('/Forum')
	}


    return (

<div class="container">
	<div class="row">
	    
	    <div class="col-md-8 col-md-offset-2">
	        
    		<h1>Create post</h1>
    		
    		<form onSubmit={createNewPostHandler} >
    		    
    		    <div class="form-group has-error">
    		        <label for="name">Name <span class="require">*</span> <small></small></label>
    		        <input type="text" class="form-control" value={name} name="name" onChange={(e)=>{
                  setName(e.target.value)
                }} />
    		        <span class="help-block">Field not entered!</span>
    		    </div>
				<div class="form-group has-error">
    		        <label for="imageURL">imageURL <span class="require">*</span> <small></small></label>
    		        <input type="text" class="form-control" value={imageURL} name="imageURL" onChange={(e)=>{
                  setImageURL(e.target.value)
                }} />
    		        <span class="help-block">Field not entered!</span>
    		    </div>
    		    
    		    <div class="form-group">
    		        <label for="title">Title <span class="require">*</span></label>
    		        <input type="text" class="form-control" value={title} name="title" onChange={(e)=>{
                  setTitle(e.target.value)
                }} />
    		    </div>
    		    
    		    <div class="form-group">
    		        <label for="comments">Comments</label>
    		        <textarea rows="5" class="form-control" value={comments} name="comments" onChange={(e)=>{
                  setComments(e.target.value)
                }}></textarea>
    		    </div>
    		    
    		    <div class="form-group">
    		        <p><span class="require">*</span> - required fields</p>
    		    </div>
    		    
    		    <div class="form-group">
    		        <button type="submit" class="btn btn-primary">
    		            Create
    		        </button>
    		        <button class="btn btn-default">
    		            Cancel
    		        </button>
    		    </div>
    		    
    		</form>
		</div>
		
	</div>
</div>


    )
    
   



    
}