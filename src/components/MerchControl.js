import React from 'react';
import MerchCatalogue from "./MerchCatalogue";
import CheckoutCart from "./CheckoutCart";
import NewMerchForm from "./NewMerchForm";
import MerchDetail from "./MerchDetail";
import EditMerchItemForm from './EditMerchItemForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      merchCatalogueVisibleOnPage: true,
      checkoutCartVisibleOnPage: false,
      newMerchFormVisibleOnPage: false,
      selectedItem: null,
    };
    this.handleCheckoutCartClick = this.handleCheckoutCartClick.bind(this);
  }

handleClick = () => {
  if (this.state.selectedItem != null) {
    this.setState({
      newMerchFormVisibleOnPage : false,
      selectedItem: null,
      editing: false
    });
  } else {
    this.setState(prevState => ({
      newMerchFormVisibleOnPage: !prevState.newMerchFormVisibleOnPage,
    }));
  }
}

handleEditClick = () => {
  this.setState({editing: true});
}

handleEditingMerch = (merchToEdit) => {
  const { dispatch } = this.props;
  const { id, name, description, quantity, image } = merchToEdit;
  const action = {
    type: 'ADD_MERCH',
    id: id,
    name: name,
    quantity: quantity,
    image: image,
    description: description
  }
  dispatch(action);
  this.setState({
    editing: false,
    selectedItem: null
  });
}

  handleAddingNewMerchItemToList = (newMerchItem) => {
    const { dispatch } = this.props;
    const { id, name, description, quantity, image } = newMerchItem;
    const action = {
      type: 'ADD_MERCH',
      id: id,
      name: name,
      quantity: quantity,
      image: image,
      description: description
    }
    dispatch(action);
    this.setState({newMerchFormVisibleOnPage: false});
  }
    
  handleDeletingMerch = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_MERCH',
      id: id,
    }
    dispatch(action);
    this.setState ({
      selectedItem: null
    })
  }

  handleChangingSelectedMerch = (id) => {
    const selectedItem = this.props.masterMerchItemList[id];
    this.setState({ selectedItem: selectedItem });
  }

  handleCheckoutCartClick = () => {
    this.setState({
      merchCatalogueVisibleOnPage: false,
      checkoutCartVisibleOnPage: true
    });
  }
  handleNewMerchFormClick = () => {
    this.setState({
      newMerchFormVisibleOnPage: true,
      merchCatalogueVisibleOnPage: false
    });
  }

  render() {
    let currentVisibleState = null;
    let checkoutCartButton = null;
    let newMerchFormButton = null;
    let buttonText = null;
    console.log(this.state);
    console.log(this.state.masterMerchItemList);
    if (this.state.editing) {
      currentVisibleState = <EditMerchItemForm merchItem = {this.state.selectedItem} onEditMerchItem = {this.handleEditingMerch} />;
      buttonText = "Return to Catalogue";
    } else if (this.state.selectedItem != null) {
      currentVisibleState = 
      <MerchDetail
        merch = {this.state.selectedItem}
        onClickingDelete = {this.handleDeletingMerch}
        onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to Catalogue";
      } 
    else if (this.state.newMerchFormVisibleOnPage) {
      currentVisibleState = <NewMerchForm onNewMerchItemCreation={this.handleAddingNewMerchItemToList} />;
      buttonText = "Return to Catalogue";
    } else {
      currentVisibleState = <MerchCatalogue merchItemList={this.props.masterMerchItemList} onMerchSelection={this.handleChangingSelectedMerch}/>;
      // checkoutCartButton = <button onClick={this.handleCheckoutCartClick}>Checkout</button>
      // newMerchFormButton = <button onClick={this.handleNewMerchFormClick}>Add Merch</button>
      buttonText = "Add Merch";
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        {newMerchFormButton}
        {checkoutCartButton}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

MerchControl.propTypes = {
  masterMerchItemList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterMerchItemList: state
  }
}

MerchControl = connect(mapStateToProps)(MerchControl);
export default MerchControl;