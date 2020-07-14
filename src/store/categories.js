
//Categories Reducer

const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  
  activeCategory: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'CATEGORY':
    // console.log(payload,'paaayllllooooaaaaad');
    const activeCategory = payload; 
    return { ...state, activeCategory };
  default:
    return state;
  }
};
  

export const categoryAction = (category) => {
  // console.log('hellooo');
  return {
    type: 'CATEGORY',
    payload: category,
  };
};