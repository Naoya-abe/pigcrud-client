import React from "react";
import { connect } from "react-redux";
import { createItem } from "../../actions";
import ItemForm from "./ItemForm";

class ItemCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createItem(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create an Item</h3>
        <ItemForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createItem })(ItemCreate);
