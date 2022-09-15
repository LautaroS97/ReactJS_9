import Item from "../Item/Item";

const ItemList = ({productos = []}) => {

    return(
        <div className="container-producto">
            <h2 className="lista-productos">PRODUCTOS</h2>
            <hr/>
            <div>
                <div className="card-list">
                    {productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
                </div>
            </div>
        </div>
    )
}

export default ItemList;