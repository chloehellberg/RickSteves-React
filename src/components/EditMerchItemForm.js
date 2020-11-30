import React from "react";
import ReusableMerchItemForm from "./ReusableMerchItemForm";
import PropTypes from "prop-types";

function EditMerchItemForm(props) {
  const { merchItem } = props;
  function handleEditMerchItemFormSubmission(event) {
    event.preventDefault();
    props.onEditMerchItem({
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      image: event.target.image.value,
      id: merchItem.id
    });
  }
  return (
    <React.Fragment>
      <ReusableMerchItemForm
      formSubmissionHandler = {handleEditMerchItemFormSubmission}
      buttonText ="Update Merch Item"/>
    </React.Fragment>
  );
}

EditMerchItemForm.propTypes = {
  onEditMerchItem: PropTypes.func
};

export default EditMerchItemForm;