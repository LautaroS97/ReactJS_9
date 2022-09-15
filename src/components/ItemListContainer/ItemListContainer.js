import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList.js';
import { pedirDatos } from '../../helpers/pedirDatos.js';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {categoryId}= useParams()
    
    useEffect(() => {
        setLoading(true)
        
        pedirDatos()
            .then((res) => {
                if(!categoryId) {
                    setProductos(res)
                } else {
                    setProductos(res.filter((prod)=>prod.category === categoryId))
                }
            })
        .catch((error) => {
            console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
        }, [categoryId])

    return (
        <div>
            {
                loading
                ? <h3>Cargando...</h3>
                : <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemListContainer;