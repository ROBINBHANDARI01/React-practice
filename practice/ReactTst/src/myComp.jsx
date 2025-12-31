import { useState } from "react";

function Cart(props){
    const [fruit,getFruit] = useState("")
    const [veggi,getVegg] = useState("")

    return(
        <>
        <div className="filter">
            <input type="search" placeholder="Search..."></input>
            <input type="checkbox" id="check"/><label for="check">Only show products in stock</label>
        </div>

        <div className="productTable">
            <div className="name"></div>
            <div className="price"></div>
        </div>

        <div className="outer">
            
        </div>
        </>
    );
}

export default Cart