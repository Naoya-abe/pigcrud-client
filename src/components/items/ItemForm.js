import React from "react";
import { Field, reduxForm } from "redux-form";

class ItemForm extends React.Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header"> {error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, placeholder, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} placeholder={placeholder} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <React.Fragment>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Title"
            placeholder="Enter title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Description"
            placeholder="Enter description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({ form: "itemForm", validate })(ItemForm);
