const url = "http://localhost:9999/api/User/register";
let options = {
    method:"POST",
    headers: {
        "Content-Type": "application/json"
    }
}

export default function UserRegister(data){
    console.log(data);
    options.body = JSON.stringify(data);
    //console.log(options);
    return fetch(url,options)
            .then(response => {
                //console.log(response)
              return response.json()
            })
            .catch(error=>{
                console.log(error)
                return error;
            });

}