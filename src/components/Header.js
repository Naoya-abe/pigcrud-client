import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/items/new" className="item">
        Create
      </Link>
      <Link to="/items/delete" className="item">
        Delete
      </Link>
      <Link to="/items/detail" className="item">
        Detail
      </Link>
      <Link to="/items/edit" className="item">
        Edit
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
