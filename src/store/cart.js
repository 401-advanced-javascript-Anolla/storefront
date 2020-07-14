
//Cart Reducer

const initialState ={
  products:[],
  numOfitemsAdded:0,
}; 

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'ADDTOCART':
    const productName = payload;
    return { ...state, products:[...state.products, productName], numOfitemsAdded : state.numOfitemsAdded+1 };
  default:
    return state;
  }
};
      
    
export const cartAction = (titleOfProduct) => {
  return {
    type: 'ADDTOCART',
    payload: titleOfProduct,
  };
};