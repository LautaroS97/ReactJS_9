import { CartContext, useCartContext } from "../../context/CartContext";
import { BsFillTrashFill } from 'react-icons/bs'

const Cart = () => {

    const {cart, cartTotal, emptyCart, removeItem} = useCartContext(CartContext)

    return(
        <div>
            <h2>Carrito de compras</h2>
            <hr/>
            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <h4>Precio: AR$ {item.precio}</h4>
                    <h4>Cantidad: {item.cantidad}</h4>
                    <h5>Variante: {item.variant}</h5>
                    <button onClick={() => removeItem(item.id)}><BsFillTrashFill/></button>
                    <hr/>
                </div>
            ))}
        
            <h3>Total: AR${cartTotal()}</h3>
            <button onClick={emptyCart}>Vaciar el carrito</button>
        </div>
    ) 
}

export default Cart;