import Contador from "../Counter/Counter";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from '../../context/CartContext';
import Select from "../Select/Select";

const ItemDetail = ({item}) => {

    const{cart, addToCart, isInCart} = useCartContext()
    
    const [cantidad, setCantidad] = useState(1)
    const [variante, setVariante] = useState(item.variant[0].value)
    
    const handleAgregar = () => {
        const itemToCart={
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            variante,
            cantidad
        }
        addToCart(itemToCart)
    }

    return(
        
        <div className="box-container-detail">
            <div className="container-detail">
                <img src={item.img}/>
                <h2 className="container-detail-nombre">{item.nombre}</h2>
                <p className="container-detail-info">Descripción: {item.desc}</p><hr/>
                <p className="container-detail-info">Categoría: {item.category}</p><hr/>
                <h3 className="container-detail-info">Precio: AR$ {item.precio}</h3><hr/>
                <p className="container-detail-info">Existencias: {item.stock}</p><hr/>
                <h1 className="container-selector">
                    <Select options={item.variant} onSelect={setVariante}/>
                </h1><hr/>
                {
                    isInCart(item.id)
                    ? <Link to="/cart">Terminar mi compra</Link>
                    : <h1 className="container-detail-contador">
                    <Contador max={item.stock}
                              contador={cantidad}
                              setCounter={setCantidad}
                              handleAgregar={handleAgregar}/>
                    </h1>
                }
                
            </div>  
        </div>
    )
}

export default ItemDetail;