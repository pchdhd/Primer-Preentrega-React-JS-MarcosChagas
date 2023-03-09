import { useState } from "react"
const ItemListContainer = ({greeting}) =>{
     

    return(
        <div className="div-container">
        <h2 className="div-container__h2">{greeting}</h2>
        </div>
    )
}

export default ItemListContainer