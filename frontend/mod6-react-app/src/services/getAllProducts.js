const url = "http://localhost:9999/api/Products";
let options = {
    method:"Get",
   
}

export default function getProducts(){
    return fetch(url,options)
            .then(response => {
                //console.log(response)
              return response.json()
            })
            .catch(error=>{
                return error;
            });

}