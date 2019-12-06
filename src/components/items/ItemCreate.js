import React from "react";
import { Field, reduxForm } from "redux-form";

class ItemCreate extends React.Component {
  renderInput(formProps) {
    console.log(formProps);
    return (
      <input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    );
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({ form: "itemCreate" })(ItemCreate);
