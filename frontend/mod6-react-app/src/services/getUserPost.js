const url = "http://localhost:9999/api/Post";
let options = {
    method:"POST",
    headers: {
        "Content-Type": "application/json"
    }
   
}

export default function getUserPost(data){
    //console.log(data);
    options.body = JSON.stringify(data)
    return fetch(url,options)
            .then(response => {
                //console.log(response)
              return response.json()
            })
            .catch(error=>{
                return error;
            });

}