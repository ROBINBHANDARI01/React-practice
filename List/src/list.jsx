import './list.css'

function List(props) {

    const items = props.items;
    const category = props.category
    { console.log(items) }
    let listItems = items.map(item =>
        <li key={item.id}>{item.name}: &nbsp; <b> {item.cal}</b></li>
    )
    return (
        <>
            <h3>{category}</h3>
            <ol>{listItems}</ol>
        </>
    );
}

export default List