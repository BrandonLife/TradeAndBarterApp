let options = {
    method:"DELETE",
   
}

export default function DeleteProductData(data){
    console.log(data, 'DELETEPRODUCT DATA');
    let url = "http://localhost:9999/api/Products/"+ data
    console.log(url)
    return fetch(url,options)
            .then(response => {
                //console.log(response)
             return response.json()
            })
            .catch(error=>{
                return error;
            });

}