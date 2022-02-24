import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Item from "../item/Item";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import { useEffect, useState } from "react";



const ItemListContainer = () => {

  const { id } = useParams();

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "items");  

    getDocs(itemsCollection).then(snapshot => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id:doc.id,
          ...doc.data() 
        }))
      );
    });
    
  }, []);

  console.log(products);


  return (
    <div>
      <h1>Lista de productos</h1>
      <hr />
      {products &&
        products.map(( product ) => {
          return <Item key={product.id} {...product} />;
        })}
    </div>
    );
};

export default ItemListContainer;
