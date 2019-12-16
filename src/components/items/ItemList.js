import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchItems } from "../../actions";

class ItemList extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  renderAdmin = item => {
    if (item.userId === this.props.userId) {
      return (
        <div className="right floated content">
          <Link to={`/items/edit/${item.id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`/items/delete/${item.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.items.map(item => {
      return (
        <div className="item" key={item.id}>
          {this.renderAdmin(item)}
          <i className="large middle aligned book icon" />
          <div className="content">
            <div className="header">{item.title}</div>
            <div className="description">{item.description}</div>
          </div>
        </div>
      );
    });
  };

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/items/new" className="ui button primary">
            Create Item
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="ui celled list">
          <h2>Item List</h2>
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: Object.values(state.items),
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchItems })(ItemList);
