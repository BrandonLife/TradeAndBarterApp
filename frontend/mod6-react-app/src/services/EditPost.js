
let token = document.cookie
let options = {
    method:"PUT",
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "mode" : "cors",
        "cache" : "no-cache",
        "credentials" : "same-origin",
        "redirect": "/"
    }
   
}

export default function EditPostData(data){
    console.log( data, "EditPostData");
    options.body = JSON.stringify(data)
    let url = "http://localhost:9999/api/Post/"+ data._id
    return fetch(url,options)
            .then(response => {
                console.log(response)
             return response.json()
            })
            .catch(error=>{
                return error;
            });

}