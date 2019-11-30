import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import ItemCreate from "./items/ItemCreate";
import ItemDelete from "./items/ItemDelete";
import ItemDetail from "./items/ItemDetail";
import ItemEdit from "./items/ItemEdit";
import ItemList from "./items/ItemList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={ItemList} />
        <Route path="/items/new" component={ItemCreate} />
        <Route path="/items/delete" component={ItemDelete} />
        <Route path="/items/detail" component={ItemDetail} />
        <Route path="/items/edit" component={ItemEdit} />
      </BrowserRouter>
    </div>
  );
};

export default App;
