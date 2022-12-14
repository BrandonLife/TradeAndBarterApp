import './CreatePost.css'
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import {createNewProduct} from '../services';

export default function CreatePost(props){
	const [productType, setProductType] = useState('')
	const [imageURL, setImageURL] = useState('')
	const [productName, setProductName] = useState('')
	const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
	const Navigate = useNavigate()

		console.log(productName, imageURL)
		
	const [data, setData] = useState({
        productType: '',
		productName: "",
		imageURL: "",
		description: "",
		price: 0,
	})
	data.productType = productType
	data.imageURL= imageURL
	data.productName = productName
	data.description = description
    data.price= price
	if(!props.loggedIn){
		return <Navigate to="/User/login" replace={true} />;
	}
	function createNewProductHandler(event){
		event.preventDefault()
		const newData = {...data}
		setData(newData)
		createNewProduct(newData)
		Navigate('/Products')
	}


    return (

<div class="container">
	<div class="row">
	    
	    <div class="col-md-8 col-md-offset-2">
	        
    		<h1>Create Product</h1>
    		
    		<form onSubmit={createNewProductHandler} >
    		    
    		    <div class="form-group has-error">
    		        <label for="productName">Product Name <span class="require">*</span> <small></small></label>
    		        <input type="text" class="form-control" value={productName} name="productName" onChange={(e)=>{
                  setProductName(e.target.value)
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
    		        <label for="productType">Product Type<span class="require">*</span></label>
    		        <input type="text" class="form-control" value={productType} name="productType" onChange={(e)=>{
                  setProductType(e.target.value)
                }} />
    		    </div>
                <div class="form-group">
    		        <label for="price">Price<span class="require">*</span></label>
    		        <input type="text" class="form-control" value={price} name="price" onChange={(e)=>{
                  setPrice(e.target.value)
                }} />
    		    </div>
    		    
    		    <div class="form-group">
    		        <label for="description">Description</label>
    		        <textarea rows="5" class="form-control" value={description} name="description" onChange={(e)=>{
                  setDescription(e.target.value)
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