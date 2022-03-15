import { useParams } from "react-router-dom";
import Item from "../item/Item";
import useProducts from "../../hooks/useProducts";
import "./itemListContainer.css"

const ItemListContainer = () => {

  const { id } = useParams();
  const { products } = useProducts();

  const filterProducts = products.filter(({ category }) => category === id);

  return (
    <div>
      <h1 className="titlePage">Catálogo</h1>
      <div className="catalogo">
        {!id && products &&
          products.map(( product ) => {
            return <Item key={product.id} {...product} />;
          })}
        {id && filterProducts &&
          filterProducts.map((product) => {
            return <Item key={product.id} {...product} />;
          })}
      </div> 
    </div>
    );
};

export default ItemListContainer;
