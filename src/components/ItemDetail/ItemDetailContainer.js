// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { collection, query, getDocs } from "firebase/firestore"
// import { db } from '../../firebaseConfig';
// import ItemDetail from "./ItemDetail";

// function ItemDetailContainer (){
//     const [producto, setProducto] = useState({})
//     let {id} = useParams()

//     useEffect(() => {
//         const getAlbums = async () => {
//           const q = query(collection(db, "articulos"));
//           const docs = [];
//           const querySnapshot = await getDocs(q);
//           querySnapshot.forEach((doc) => {
//             docs.push({ ...doc.data(), id: doc.id });
//           });
//           console.log("All docs:", docs);
//           setProducto(docs.find((prod) => prod.id === id));
//         };
//         console.log("Selected ID:", id);
//         getAlbums();
//       }, [id]);
//       return (
//         <>
//           {producto && producto.Nombre ? (
//             <ItemDetail data={producto} />
//           ) : (
//             <div>Loading...</div>
//           )}
//         </>
//       );
// }

// export default ItemDetailContainer