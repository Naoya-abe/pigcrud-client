import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import history from "../../history";
import { fetchItem, deleteItem } from "../../actions";

class ItemDelete extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.id);
  }
  modalActions = () => {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteItem(this.props.match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <button onClick={() => history.push("/")} className="ui button cancel">
          Cancel
        </button>
      </React.Fragment>
    );
  };
  render() {
    if (!this.props.item) {
      return null;
    }
    return (
      <div>
        ItemDelete
        <Modal
          title="Delete Item"
          content={{
            title: this.props.item.title,
            description: this.props.item.description
          }}
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
