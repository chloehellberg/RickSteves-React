import merchListReducer from "../../reducers/merch-list-reducer";

describe('merchListReducer', () => {

  let action;
  const merchData = {
    name: "Bobble Head",
    description: "So fun",
    quantity: "4",
    image: "scarf",
    id: 4
  }

  test('Should return default state if there is no action type passed into reducer', () => {
    expect(merchListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new merch to merchCatalogueItems', () => {
    const { name, description, quantity, image, id } = merchData;
    action = {
      type: 'ADD_MERCH',
      name: name,
      description: description,
      quantity: quantity,
      image: image,
      id: id
    };
    expect(merchListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        description: description,
        quantity: quantity,
        image: image,
        id: id
      }
    });
  });

});