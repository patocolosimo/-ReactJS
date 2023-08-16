import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.css"
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const {cartSize} = useContext(CartContext)
  return (
    <div className="cart-widget">
      <Link to={'/SportClans/cart'}>
      <FontAwesomeIcon icon={faShoppingCart} className="fa cart-icon" />
      <span className="notification">{cartSize}</span>
      </Link>

    </div>
  );
}

export default CartWidget;

