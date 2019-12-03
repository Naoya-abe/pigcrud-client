import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import GoogleAuth from "./GoogleAuth";

const Header = props => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Home
      </Link>
      {props.isSignedIn ? (
        <React.Fragment>
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
        </React.Fragment>
      ) : null}
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Header);
