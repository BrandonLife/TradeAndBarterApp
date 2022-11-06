export default function Card(props){

return(


<div className="card">
<img className="card_image" src={props.img} alt="This is a dynamic pic"></img>
<h2 className="card_title">{props.title}</h2>
<p className="card_description">{props.description}</p>
</div>
)


}