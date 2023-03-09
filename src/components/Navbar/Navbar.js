import { useState } from "react"
import Carwidget from "../Carrito/Carwidget"
import Button from "../Button/Button"
const Navbar = () => {

return (
    <nav className="nav-bar">
        <h1 className="nav-bar__h1">SuperDescuento</h1>
          <span>¡Cuanto mas compras mas barato es!</span>
          <Button/>
          <Carwidget/>
 </nav>
    )

}
export default Navbar