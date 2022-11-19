const url = "http://localhost:9999/api/Post/createPost"
let token = document.cookie
let options ={
method: "POST",
headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
    "mode" : "cors",
    "cache" : "no-cache",
    "credentials" : "same-origin",
    "redirect": "/"
}
}

export default function createNewPost(data){
    options.body = JSON.stringify(data)
    console.log(options);
    return fetch(url,options)
            .then(response => response.json())
            .catch(error=>{
                console.log(error)
                return error;
            });


}