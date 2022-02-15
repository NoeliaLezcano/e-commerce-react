import React from "react";
import { BrowserRouter, Route, Routes as Switch} from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import ItemListContainer from "../components/items-list-container/ItemListContainer";
import ItemDetailContainer from "../components/item-detail-container/ItemDetailContainer";
import NotFound from "../components/not-found/NotFound";
import Cart from "../components/cart/Cart";


const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;