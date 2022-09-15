const Contador = ({max, counter, setCounter, handleAgregar}) => {

    const handleSumar = () => {
        if(counter<max) {
            setCounter(counter+1)
        }
    }

    const handleRestar = () => {
        if(counter>1) {
            setCounter(counter-1)
        }
    }

    return(
        <div>
            <button className="contador" onClick={handleRestar}>-</button>
            <span>{counter}</span>
            <button className="contador" onClick={handleSumar}>+</button>
        
            <br/>
            <button onClick={handleAgregar}>
                Agregar al carrito
            </button>
        
        </div>
    )
    
}

export default Contador;