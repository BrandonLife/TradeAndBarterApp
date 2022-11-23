const url = "http://localhost:9999/api/Post/";
let options = {
    method:"Get",
   
}

export default function getPosts(){
    return fetch(url,options)
            .then(response => {
              return response.json()
            })
            .catch(error=>{
                return error;
            });

}