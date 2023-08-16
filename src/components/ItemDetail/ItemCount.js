import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./ItemCount.css"

const ItemCount = ({stock, initial, onAdd}) => {

const [count, setCount] = useState(initial)

    const suma = () =>{
        if (stock > count){
            setCount(count + 1)
        }
    }
    const resta = ()=>{
        if(count > 1){
            setCount(count -1)
        }
    }
    const AgregarCantidad = ()=>{
        onAdd(count)
    }
  return (
    <>
    <div>
        <div className='count'> {count}</div>
        <div>
            <Link to={'/SportClans/cart'} className="btn btn-primary" onClick={AgregarCantidad}>Comprar</Link>
        </div>
        <div>
        <button className="btn btn-primary" onClick={resta}> - </button>
        <button className="btn btn-primary" onClick={suma}> + </button>
        </div>
    </div>
    </>
  )
}

export default ItemCount