let options = {
    method:"DELETE",
   
}

export default function DeletePostData(data){
    console.log(data, 'DElETEPOST DATA');
    let url = "http://localhost:9999/api/Post/"+ data
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