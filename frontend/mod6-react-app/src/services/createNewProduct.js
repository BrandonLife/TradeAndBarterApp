const url = "http://localhost:9999/api/Products/createProduct"
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

export default function createNewProduct(data){
    options.body = JSON.stringify(data)
    return fetch(url,options)
            .then(response => response.json())
            .catch(error=>{
                return error;
            });


}