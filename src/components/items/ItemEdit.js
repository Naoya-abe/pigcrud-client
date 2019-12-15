import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchItem, editItem } from "../../actions";
import ItemForm from "./ItemForm";

class ItemEdit extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editItem(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.item) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h3>Edit an Item</h3>
          <ItemForm
            edit
            initialValues={_.pick(this.props.item, "title", "description")}
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.id;
  return { item: state.items[itemId] };
};

export default connect(mapStateToProps, { fetchItem, editItem })(ItemEdit);
