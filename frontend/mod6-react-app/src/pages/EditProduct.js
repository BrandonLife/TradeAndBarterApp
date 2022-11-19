import "./products.css"
import Card from "../Components/Card"
import { Navigate } from "react-router-dom";
export default function EditProduct(props){
    if(!props.loggedIn){
        return <Navigate to="/User/login" replace={true} />;
    }
    return (
        <div className="wrapper">
             <h1>Edit Product</h1>
        <Card 
                img="https://images.pexels.com/photos/2030476/pexels-photo-2030476.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    title="Sewing Machine"
                    description="This amazing sewing machine has been my sidekick since I opened up my tailoring shop in 2013. If you are good to your tools, your tools will be good to you, my father always told me, and so with a passion I have kept this sewing machine in the best condition.  I was recently gifted an industrial capacity sewing machine and feel it's time to pass on my old friend to a new home.  Wanna trade? ~Value: $500 ~Interested in kitchen equipment, precious metals, rare treasures" />
                </div>
    )
   

}