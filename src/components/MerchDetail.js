import React from 'react';
import PropTypes from 'prop-types';

function MerchDetail(props){
  const { merch, onClickingEdit, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Merch Detail</h1>
      <h3>{merch.name} - {merch.description}</h3>
      <p>Quantity: {merch.quantity}</p>
      <p><em>{merch.image}</em></p>
      <button onClick={() => onClickingEdit(merch.id) }>Update Merch</button>
      <button onClick={()=> onClickingDelete(merch.id) }>Delete Merch</button>
      <hr/>
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default MerchDetail;
