import React from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import history from "../../history";
import { fetchItem, deleteItem } from "../../actions";

class ItemDelete extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchItem(id);
  }
  modalActions = () => {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteItem(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to={"/"} className="ui button cancel">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  modalContent = () => {
    if (!this.props.item) {
      return "Are you sure ?";
    } else {
      return `Are you sure you wanna delete the item with title: ${this.props.item.title}`;
    }
  };
  render() {
    if (!this.props.item) {
      return null;
    }
    return (
      <div>
        <Modal
          title="Delete Item"
          content={this.modalContent()}
          actions={this.modalActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.id;
  return { item: state.items[itemId] };
};

export default connect(mapStateToProps, { fetchItem, deleteItem })(ItemDelete);
