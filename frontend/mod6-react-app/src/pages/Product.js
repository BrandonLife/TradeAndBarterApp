
import "./products.css"
import { Navigate } from "react-router-dom";
import { useEffect , useState} from "react";
import { DeleteProductData } from "../services";
import getOneProduct from "../services/getOneProduct";
export default function Product(props){
    
    const [products, setProducts] = useState([])
    let productId=''
    function runFetch() {
	let pathname = window.location.pathname
    let pathNameArray = pathname.split('/')
    productId = pathNameArray[2]
    getOneProduct(productId).then((data)=>{
       
    })
   }
   function DeleteHandler(){
    DeleteProductData(productId)
     return <Navigate to='/Products'/>
    
    }
	useEffect(() => {
		console.log("searched");
		runFetch();
	}, []);


    if(!props.loggedIn){
        return <Navigate to="/User/login" replace={true} />;
    }
    return (
        <div>

        
        <div className="wrapper">
<div className="card">
            <img className="card_image" src={products.imageURL} alt="This is a dynamic pic"></img>
            <h2 className="card_title">{products.title}</h2>
            <p className="card_description">{products.description}</p>
            <button className="card_btn">Wanna Trade?</button>
            <button onClick={DeleteHandler}><a>Delete Product</a></button>
            </div>
        </div>
        </div>
    )
   

}