const url = "http://localhost:9999/api/User/login"
let options ={
method: "POST",
headers: {
    "Content-Type": "application/json"
}
}

export default function UserLogin(data){
    options.body = JSON.stringify(data);
    return fetch(url, options)
    .then(data=>data.json())
    .catch(error=>{ 
        console.log(error)
        return error;
    }
       )
}