import Home from "./Home";
import { Navigate } from "react-router-dom";
export default function Logout(props){
    if(!props.loggedIn){
        return <Navigate to="/User/login" replace={true} />;
    }
return (
    <>
     {<Home />}
    </>
   
)


}