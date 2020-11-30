import React from "react";
import PropTypes from "prop-types";

function ReusableMerchItemForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
        type="text"
        name="name"
        placeholder="Merch Name" />
        <input
        type="text"
        name="description"
        placeholder="Description of Merch" />
        <input
        type="text"
        name="quantity"
        placeholder="How Many?" /><input
        type="text"
        name="image"
        placeholder="URL Link to image" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableMerchItemForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableMerchItemForm;