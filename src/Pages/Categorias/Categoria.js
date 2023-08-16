import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import ItemList from "../../components/ItemList/ItemList";
import ItemDetail from "../../components/ItemDetail/ItemDetail";


const Categoria = () => {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const { categoria, id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "articulos"));
      const querySnapshot = await getDocs(q);
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });

      // Filtrar productos por categoría si está presente en la URL
      if (categoria) {
        setProductos(products.filter((prod) => prod.cat === categoria));
      } else {
        setProductos(products);
      }

      // Establecer el producto seleccionado si hay un ID en la URL
      if (id) {
        setProductoSeleccionado(products.find(prod => prod.id === id));;
      }
    };

    getProducts();
  }, [categoria, id]);

  return (
    <div>
      <div id="contenedor-productos">
        <div className='grid-container'>
      {categoria && !id && <ItemList productos={productos} />}
        </div>
      </div>
      {id && productoSeleccionado && <ItemDetail data={productoSeleccionado} />}

    </div>
  );
};

export default Categoria;