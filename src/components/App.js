import React from "react";
import { Router, Route } from "react-router-dom";

import Header from "./Header";
import ItemCreate from "./items/ItemCreate";
import ItemDelete from "./items/ItemDelete";
import ItemDetail from "./items/ItemDetail";
import ItemEdit from "./items/ItemEdit";
import ItemList from "./items/ItemList";

import history from "../history";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "5px" }}>
      <Router history={history}>
        <Header />
        <Route path="/" exact component={ItemList} />
        <Route path="/items/new" component={ItemCreate} />
        <Route path="/items/delete/:id" component={ItemDelete} />
        <Route path="/items/detail" component={ItemDetail} />
        <Route path="/items/edit/:id" component={ItemEdit} />
      </Router>
    </div>
  );
};

export default App;
