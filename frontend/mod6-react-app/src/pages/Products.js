import "./products.css"
import { Navigate, Link } from "react-router-dom";
import { getProducts } from "../services";
import { useState, useEffect} from "react";
export default function Products(props){
    const [productData, setProductData] = useState();
    const [products, setProducts] = useState([])
  
    function runFetch(){
        getProducts().then((data) => {
           
				let newData = JSON.stringify(data);
				let oldData = JSON.stringify(productData);
				if (oldData !== newData) {
					setProducts(data);
				}
	    }, []);
    }
  
    // function loadProducts(){
    //     let loadPostBtn = document.getElementById('load-product')
    //     loadPostBtn.addEventListener(('click'), ()=>{
    //         runFetch()
    //     })
       
    // }
    useEffect(()=>{
        runFetch()
    },[])
    if(!props.loggedIn){
        return <Navigate to="/User/login" replace={true} />;
    }
    const productsArray = products.map((productData,index) => {
        
		return (
           
            <div className="card">
            <img className="card_image" src={productData.imageURL} alt="This is a dynamic pic"></img>
            <h2 className="card_title">{productData.title}</h2>
            <p className="card_description">{productData.description}</p>
            <button className="card_btn">Wanna Trade?</button>
            <button><Link to={`/Products/${productData._id}`}>See Product</Link></button>
            </div>
            
		);
	});
    if(productsArray.length !==0){
        return(
            // <body onLoad={loadProducts()}>

           
            <div>
            <div className="wrapper">
            {productsArray}
            </div>
            {/* <button onClick={loadProducts} id="load-product">Load Products</button> */}
             <button><Link to="/Products/create/product">Create New Product</Link></button>
            </div>
            // </body>
        )
    }else if(productsArray.length === 0){
        return(
            // <body onLoad={loadProducts()}>
            <div>
            <p>Sorry no products to display</p>
            {/* <button onClick={loadProducts} id="load-product">Load Products</button> */}
             <button><Link to="/Products/create/product">Create Product</Link></button>
           </div>
        //    </body>
        )
       
  
    }
   
        


    


}