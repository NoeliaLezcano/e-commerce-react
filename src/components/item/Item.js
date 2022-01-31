import ItemCounter from "../item-counter/ItemCount";

const Item = ({name, author, price, id, setSelectedItem}) => {
    const selectItem = () => setSelectedItem({ name, price, id })
  return <div>
      <h2>Título: {name} </h2>
      <h2>Autor: {author}</h2>
      <h2>Precio: ${price} </h2>
      <ItemCounter stock={10} initial={1} />
      <button onClick={selectItem}>Seleccionar producto</button>
      <hr/>
  </div>;
};

export default Item;
