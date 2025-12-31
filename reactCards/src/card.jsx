import robin from './assets/robin.jpg'
function Card(props) {
    return (
        <div className="Container">
            <img src={robin} alt="Can't load"></img>
            <h2 className="Name">{props.name}</h2>
            <p className="details">{props.details}</p>
        </div>
    );
}



export default Card;
