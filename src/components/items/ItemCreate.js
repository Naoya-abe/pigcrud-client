import React from "react";
import { Field, reduxForm } from "redux-form";

class ItemCreate extends React.Component {
  //エラーメッセージがでないのはSemantiUIのせい
  //SemantiUIのclass名をformからform errorに変更すれば大丈夫。
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header"> {error}</div>
        </div>
      );
    }
  }
  // さらにリファクタリング
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

  // ちょっとリファクタリング
  // renderInput({ input }) {
  //   return <input onChange={input.onChange} value={input.value} />;
  // }

  // オリジナル
  // renderInput(formProps) {
  //   return (
  //     <input
  //       onChange={formProps.input.onChange}
  //       value={formProps.input.value}
  //     />
  //   );
  // }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
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

export default reduxForm({ form: "itemCreate", validate })(ItemCreate);
