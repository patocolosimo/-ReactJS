import React from 'react'
import { Link } from 'react-router-dom'
import ItemListContainer from '../../components/ItemList/ItemListContainer';


const Home = ({ ItemData }) => {
    return (
      <div className="container">
        <div className="jumbotron">
          <p className="lead">¡Bienvenido a nuestra tienda de deportes!</p>
          <hr className="my-4" />
          <p>Explora nuestra amplia selección de productos deportivos.</p>
        </div>
        <div>
          <ItemListContainer ItemData={ItemData} />
        </div>
      </div>
    );
  };
  
  export default Home;