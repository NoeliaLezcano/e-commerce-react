import { useParams } from "react-router-dom";
import Item from "../item/Item";
import useProducts from "../../hooks/useProducts";

const ItemListContainer = () => {

  const { id } = useParams();
  const { products } = useProducts();

  const filterProducts = products.filter(({ category }) => category === id);

  console.log(products);

  return (
    <div>
      <h1>Lista de productos</h1>
      <hr />
      {!id && products &&
        products.map(( product ) => {
          return <Item key={product.id} {...product} />;
        })}
      {id && filterProducts &&
        filterProducts.map((product) => {
          return <Item key={product.id} {...product} />;
        })}   
    </div>
    );
};

export default ItemListContainer;
