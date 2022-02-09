import { useEffect, useState } from "react";
import { productAPI } from "../../helpers/promises";
import Item from "../item/Item";


const ItemDetail = () => {
  const[selectedItem, setSelectedItem] = useState (null);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const result = await productAPI;
      setProduct(result);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
      console.log("Finalización del consumo de la API productAPI");
    }
  };

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
      <div>
        <h3>Producto seleccionado: </h3>
        {selectedItem && selectedItem.image && (
        <img src={selectedItem.image} alt="selectedItemImage" />
        )}
        <p>{selectedItem && selectedItem.title}</p>
        <p>{selectedItem && selectedItem.author}</p>
        <p>{selectedItem && selectedItem.description}</p>
        <p>{selectedItem && selectedItem.price}</p>
        <p>ID: {selectedItem && selectedItem.id}</p>
        <p>STOCK seleccionado: {selectedItem && selectedItem.stock}</p>
        <hr />
        <Item key={product.id} {...product} setSelectedItem={setSelectedItem} />

      </div>
    );
};

export default ItemDetail;
