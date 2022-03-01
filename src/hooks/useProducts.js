import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect (() => {

    const db = getFirestore();
    const itemsCollection = collection(db, "items");  
    
    getDocs(itemsCollection).then(snapshot => {
      setProducts(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id:doc.id,
        }))
      );
    });
     
  }, []);

  return {
    products,
  };



};

export default useProducts;