import React from 'react';
import MerchCatalogue from "./MerchCatalogue";
import CheckoutCart from "./CheckoutCart";
import NewMerchForm from "./NewMerchForm";
import MerchDetail from "./MerchDetail";
import EditMerchItemForm from './EditMerchItemForm';

class MerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      merchCatalogueVisibleOnPage: true,
      checkoutCartVisibleOnPage: false,
      newMerchFormVisibleOnPage: false,
      selectedItem: null,
      masterMerchItemList: []
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
  const editedMasterMerchItemList = this.state.masterMerchItemList
  .filter(merch => merch.id !==this.state.selectedItem.id)
  .concat(merchToEdit);
  this.setState({
      masterMerchItemList: editedMasterMerchItemList,
      editing: false,
    selectedItem: null
  });
}

  handleAddingNewMerchItemToList = (newMerchItem) => {
    const newMasterMerchItemList = this.state.masterMerchItemList.concat(newMerchItem);
    this.setState({
      masterMerchItemList: newMasterMerchItemList,
      newMerchFormVisibleOnPage: false
    });
  }

  handleDeletingMerch = (id) => {
    const newMasterMerchItemList = this.state.masterMerchItemList.filter(merch => merch.id !==id);
    this.setState ({
      masterMerchItemList: newMasterMerchItemList,
      selectedItem: null
    })
  }

  handleChangingSelectedMerch = (id) => {
    const selectedItem = this.state.masterMerchItemList.filter(merch => merch.id === id)[0];
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
      currentVisibleState = <MerchCatalogue merchItemList={this.state.masterMerchItemList} onMerchSelection={this.handleChangingSelectedMerch}/>;
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

export default MerchControl;