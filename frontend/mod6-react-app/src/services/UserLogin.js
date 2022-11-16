const url = "mongodb://localhost:27017/TradeAndBarter"
let options ={
method: "POST",
headers: {
    'Content-Type': "application/json"
}
}

export default function userLogin(data){
    options.body = JSON.stringify(data);
    return fetch(url, options)
    .then(data=>data.json())
    .catch(error=>{ 
        console.log(error)
        return error;
    }
       )
}