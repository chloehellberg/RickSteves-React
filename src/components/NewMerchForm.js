import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';


function NewMerchForm(props) {
  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchItemCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, image: event.target.image.value, id: v4() })
  }
return (
  <React.Fragment>
    <form onSubmit={handleNewMerchFormSubmission}>
      <input
      type= 'text'
      name= 'name'
      placeholder= 'Merch name'/>
      <input
      type='text'
      name= 'description'
      placeholder= 'describe'/>
      <input
      type='text'
      name= 'quantity'
      placeholder= 'How many'/>
      <input
      type='text'
      name= 'image'
      placeholder= 'Enter Image URL Here'/>
      <button type='submit'>Submit</button>
    </form>
  </React.Fragment>
);
}
NewMerchForm.propTypes = {
  onNewMerchItemCreation: PropTypes.func
}

export default NewMerchForm;