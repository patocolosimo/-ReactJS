import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, query, getDocs } from "firebase/firestore"
import { db } from '../../firebaseConfig';
import ItemList from './ItemList';
import "./ItemList.css"

function ItemListContainer() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getAlbums = async () => {
        const q = query(collection(db, "articulos"));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id })
        });
        setItems(docs);
    };
    getAlbums();
}, [])
console.log(items)

  return (
      <>
        <div id="contenedor-productos">
        <div className='grid-container'>
			    <ItemList productos={items} />
          </div>
        </div>
      </>
    
  );
}

export default ItemListContainer;

