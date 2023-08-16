import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css"

function ItemDetail ({data}) {
  const [goToCart, setGoToCart] = useState(0);
  const {addItem} = useContext(CartContext); 

  const onAdd = (quantity) => {
      setGoToCart(quantity)
      addItem(data, quantity);
  };

  return (
    <div>
      <h2>Detalle del producto</h2>
      <h3>{data.Nombre}</h3>
      <img src={data.Img} className="imagen-producto" alt={data.Nombre}/>
      <p>{data.descripcion}</p>
      <p>${data.Precio}</p>
      <ItemCount stock={data.Stock} initial={1} onAdd={onAdd} />
    </div>
  );
  
  
}

export default ItemDetail