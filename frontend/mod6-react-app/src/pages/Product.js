
import "./products.css"
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { DeleteProductData, getProducts} from "../services";
export default function Product(props){
    console.log(props)
    const [products, setProducts] = useState([])
    const [productUrlId, setProductUrlId] = useState('')
    const Navigate = useNavigate()
    let productId=''
    function runFetch() {
	let pathname = window.location.pathname
    let pathNameArray = pathname.split('/')
    productId = pathNameArray[2]
    setProductUrlId(productId)
    getProducts().then((data) => {
        let newData = JSON.stringify(data);
        let oldData = JSON.stringify(products);
        if (oldData !== newData) {
            setProducts(data);

        }
        
}, []);
    
}
 
   function DeleteHandler(){
    DeleteProductData(productUrlId)
    Navigate('/Products')
    }
	useEffect(() => {
		console.log("searched");
		runFetch();
	}, []);


    if(!props.loggedIn){
        return <Navigate to="/User/login" replace={true} />;
    }

    for(let product of products){
        if(product._id === productUrlId){
            return (
                <div>
        
                
                <div className="wrapper">
        <div className="card">
                    <img className="card_image" src={product.imageURL} alt="This is a dynamic pic"></img>
                    <h2 className="card_title">{product.title}</h2>
                    <p className="card_description">{product.description}</p>
                    <button className="card_btn">Wanna Trade?</button>
                    <button onClick={DeleteHandler}><Link>Delete Product</Link></button>
                    <button><Link to={`/Products/edit/product/${productUrlId}`}>Edit Product</Link></button>
                    </div>
                </div>
                </div>
            )
           
        }
    }
   

}