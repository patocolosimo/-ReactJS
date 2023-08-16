import { Link } from "react-router-dom";
import "./ItemCard.css"

function ItemCard( {data} ) {
    console.log(data)
    return (
        <>
            <div className="card">
                <img src={data.Img} className="card-img-top" alt={data.Alt} />
                <div className="card-body">
                    <h5 className="card-title">{data.Nombre}</h5>
                    <p className="card-text">Precio: {data.Precio}</p>
                    <p className="card-desc">{data.descripcion}</p>
                    <Link to={`product/${data.cat}/${data.id}`} className="btn btn-primary">
                    Ver detalle
                    </Link>
                    
                </div>
            </div>
        </>
    )
};

export default ItemCard;
