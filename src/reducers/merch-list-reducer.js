export default (state = {}, action) => {
  const { name, description, quantity, image, id } = action;
  switch (action.type) {
    case 'ADD_MERCH':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          description: description,
          quantity: quantity,
          image: image,
          id: id
        }
      });
    default:
      return state;
  }
};