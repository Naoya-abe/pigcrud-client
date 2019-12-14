import React from "react";
import { connect } from "react-redux";

import { fetchItems } from "../../actions";

class ItemList extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  renderList = () => {
    return this.props.items.map(item => {
      return (
        <div className="item" key={item.id}>
          <i className="large middle aligned book icon" />
          <div className="content">
            <div className="header">{item.title}</div>
            <div className="description">{item.description}</div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="ui celled list">
        <h2>Item List</h2>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: Object.values(state.items) };
};

export default connect(mapStateToProps, { fetchItems })(ItemList);
