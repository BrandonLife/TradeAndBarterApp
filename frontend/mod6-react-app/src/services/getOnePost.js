
let options = {
    method:"GET",
   
}

export default function getOnePost(data){
    console.log(data, 'getOnePost data')
    const url = "http://localhost:9999/api/Post/specificPost/"+ data
    console.log(url)
    return fetch(url,options)
            .then(response => {
              return response.json()
            })
            .catch(error=>{
                return error;
            });

}