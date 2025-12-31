const list = ['products', 'shopping', 'cart', 'about']

function N() {
    return (
        <ul style={{display:"flex",gap:"20px"}}>
            {list.map((ele,index) => (
                <li key = {index}>{ele}</li>
            ))}
        </ul>
    )}

export default N;