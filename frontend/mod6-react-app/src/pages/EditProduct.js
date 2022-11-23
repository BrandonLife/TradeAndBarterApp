import "./products.css"
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { EditProductData, getProducts } from "../services";
export default function EditProduct(props){
    const [productType, setProductType] = useState('')
	const [imageURL, setImageURL] = useState('')
	const [productName, setProductName] = useState('')
	const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
	const [id, setId] = useState({id:''})
	const [products, setProducts] = useState([])
	const Navigate = useNavigate()
	let newData={}

    
   
	function runFetch() {
        let pathname = window.location.pathname
        let pathNameArray = pathname.split('/')
        let productId = {id:pathNameArray[4]}
		setId(productId)
		getProducts().then((data) => {
			let newData = JSON.stringify(data);
			let oldData = JSON.stringify(products);
			if (oldData !== newData) {
				console.log(data)
				setProducts(data);
	
			}
			
	}, []);
       }
	   useEffect(() => {
		console.log("searched");
		runFetch();
	}, []);
	newData.productName = productName
	newData.productType = productType
	newData.imageURL = imageURL
	newData.description= description
	newData.price = price
	newData._id = id.id 
	function EditProductHandler(event){
		event.preventDefault()
		for(let product of products){
			if(product._id === id.id){
				EditProductData(newData)
			}
		}
		
		Navigate('/Products')
		
	}
    
    if(!props.loggedIn){
        return <Navigate to="/User/login" replace={true} />;
    }

	for(let product of products){

		if(product._id === id.id){
			return (
				
			   <div class="container">
			 <div class="row">
				 
				 <div class="col-md-8 col-md-offset-2">
					 
					 <h1>Edit Product</h1>
					 
					 <form onSubmit={EditProductHandler} >
						 
						 <div class="form-group has-error">
							 <label for="productName">Product Name <span class="require">*</span> <small></small></label>
							 <input type="text" class="form-control" placeholder={product.productName} value={productName} name="productName" onChange={(e)=>{
						   setProductName(e.target.value)
						 }} />
							 <span class="help-block">Field not entered!</span>
						 </div>
						 <div class="form-group has-error">
							 <label for="imageURL">imageURL <span class="require">*</span> <small></small></label>
							 <input type="text" class="form-control" placeholder={product.imageURL} value={imageURL} name="imageURL" onChange={(e)=>{
						   setImageURL(e.target.value)
						 }} />
							 <span class="help-block">Field not entered!</span>
						 </div>
						 
						 <div class="form-group">
							 <label for="productType">Product Type<span class="require">*</span></label>
							 <input type="text" class="form-control" placeholder={product.productType} value={productType} name="productType" onChange={(e)=>{
						   setProductType(e.target.value)
						 }} />
						 </div>
						 <div class="form-group">
							 <label for="price">Price<span class="require">*</span></label>
							 <input type="text" class="form-control" placeholder={product.price} value={price} name="price" onChange={(e)=>{
						   setPrice(e.target.value)
						 }} />
						 </div>
						 
						 <div class="form-group">
							 <label for="description">Description</label>
							 <textarea rows="5" class="form-control" placeholder={product.description} value={description} name="description" onChange={(e)=>{
						   setDescription(e.target.value)
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
		 
	)
			
		}
	}

    

}