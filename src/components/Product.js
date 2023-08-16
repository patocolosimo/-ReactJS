import React from 'react';
import { Link } from 'react-router-dom';

function Product({ match }) {
  const productId = match.params.id;
  const product = {
    id: productId,
    name: 'Producto ' + productId,
    price: 10.99,
    description: 'Descripción del producto ' + productId,
  };

  return (
    <div>
      <h2>Detalle del producto</h2>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>
      <Link to="/catalog">Volver al catálogo</Link>
    </div>
  );
}

export default Product;
