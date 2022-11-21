const url = "http://localhost:9999/api/Post/specificPost/:id";
let options = {
    method:"GET",
   
}

export default function getOnePost(data){
    console.log(data, 'getOnePost data')
    return fetch(url,options)
            .then(response => {
                console.log(response)
              return response.json()
            })
            .catch(error=>{
                return error;
            });

}