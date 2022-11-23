import { useState } from "react"
import { Navigate } from "react-router-dom"
import {getUser, getUserPost, getUserProduct} from "../services"
import ForumPost from "./ForumPost"
import "./Account.css"
import Product from "./Product"
import { useEffect } from "react"
export default function Account(props){
const [email, setEmail] = useState('')
const [imageURL, setImageURL] = useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [phoneNumber, setPhoneNumber] = useState('')
const [occupation, setOccupation] = useState('')
const [location, setLocation] = useState('')
const [username, setUsername] = useState('')
const [posts, setPosts] = useState([])
const [products, setProducts] = useState([])
const [postNum, setPostNum] = useState(0);
const [productNum, setProductNum] = useState(0);
function runPostFetch() {
    getUserPost({
        id: props.userId,
    }).then((data) => {
        console.log(data);
        getUser({
            id: props.userId,
        }).then((user) => {
            console.log(data);
            setPostNum(data.length);
            setUsername(user.username);
            setEmail(user.email)
            setImageURL(user.imageURL)
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setPhoneNumber(user.phoneNumber)
            setLocation(user.location)
            setOccupation(user.occupation)
            data = data.reverse().slice(0, 3);
            data = data.map(item=>{
                item.creatorId = user.username;
                return item;
            });

            console.log(data);
            let newData = JSON.stringify(data);
            let oldData = JSON.stringify(posts);
            if (oldData !== newData) {
                setPosts(data);
            }
        });
    });
}
function runProductFetch() {
    getUserProduct({
        id: props.userId,
    }).then((data) => {
        console.log(data);
        getUser({
            id: props.userId,
        }).then((user) => {
            console.log(data);
            setProductNum(data.length);
            setUsername(user.username);
            setEmail(user.email)
            setImageURL(user.imageURL)
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setPhoneNumber(user.phoneNumber)
            setLocation(user.location)
            setOccupation(user.occupation)
            console.log(data)
            data = data.reverse()
            data=data.slice(0, 3);
            data = data.map(item=>{
                item.creatorId = user.username;
                return item;
            });

            console.log(data);
            let newData = JSON.stringify(data);
            let oldData = JSON.stringify(products);
            if (oldData !== newData) {
                setProducts(data);
            }
        });
    });
}


function runFetch(data){
    console.log("searched");
    runPostFetch(data);
    runProductFetch(data);
}
if(!props.loggedIn){
    return <Navigate to="/User/login" replace={true} />;
}
console.log(posts)
const postsArray = posts.map((post,index) => {
    return (
        <ForumPost
            key={post._id}
            index={index+1}
            name={post.name}
            title={post.title}
            imageURL={post.imageURL}
            comments={post.comments}
            creatorId={post.creatorId}
        />
    );
});
const productsArray = products.map((product,index) => {
    return (
        <Product
            key={product._id}
            index={index+1}
            title={product.title}
            imageURL={product.imageURL}
            description ={product.description}
            creatorId={product.creatorId}
        />
    );
});

return (
    <>
<div class="container-xl px-4 mt-4">
    {/* <!-- Account page navigation--> */}
    <nav class="nav nav-borders">
        <a class="nav-link active ms-0" href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details" target="__blank">Profile</a>
    </nav>
    <hr class="mt-0 mb-4"/>
    <div class="row">
        <div class="col-xl-4">
            {/* <!-- Profile picture card--> */}
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                <div class="card-body text-center">
                    {/* <!-- Profile picture image--> */}
                    <img class="img-account-profile rounded-circle mb-2" src={imageURL} alt=""/>
                    {/* <!-- Profile picture help block--> */}
                    <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    {/* <!-- Profile picture upload button--> */}
                    <button class="btn btn-primary" type="file">Upload new image</button>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            {/* <!-- Account details card--> */}
            <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                    <form onSubmit={runFetch()} >
                        {/* <!-- Form Group (username)--> */}
                        <div class="mb-3">
                            <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                            <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" value={username}/>
                        </div>
                        {/* <!-- Form Row--> */}
                        <div class="row gx-3 mb-3">
                            {/* <!-- Form Group (first name)--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">First name</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value={firstName}/>
                            </div>
                            {/* <!-- Form Group (last name)--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Last name</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value={lastName}/>
                            </div>
                        </div>
                        {/* <!-- Form Row        --> */}
                        <div class="row gx-3 mb-3">
                            {/* <!-- Form Group (organization name)--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName">Occupation</label>
                                <input class="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" value={occupation}/>
                            </div>
                            {/* <!-- Form Group (location)--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLocation">Location</label>
                                <input class="form-control" id="inputLocation" type="text" placeholder="Enter your location" value={location}/>
                            </div>
                        </div>
                        {/* <!-- Form Group (email address)--> */}
                        <div class="mb-3">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value={email}/>
                        </div>
                        {/* <!-- Form Row--> */}
                        <div class="row gx-3 mb-3">
                            {/* <!-- Form Group (phone number)--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value={phoneNumber}/>
                            </div>
                        </div>
                        <div class="row gx-3 mb-3">
                            {/* <!-- Form Group (phone number)--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">ImageURL</label>
                                <input class="form-control" id="inputPhone" type="text" placeholder="imageURL" value={imageURL}/>
                            </div>
                        </div>
                        {/* <!-- Save changes button--> */}
                        <button class="btn btn-primary" type="submit">Save changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<hr />
                <p>
					<span>Posts: </span>
					{postNum}
				</p>
            <div>
				<h2>Your 3 most recent posts</h2>
				{postsArray}
			</div>
            <p>
					<span>Products: </span>
					{productNum}
				</p>
            <div>
				<h2>Your 3 most recent products</h2>
				{productsArray}
			</div>


</>

)




    
}