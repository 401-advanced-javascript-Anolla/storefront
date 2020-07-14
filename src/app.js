import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Header from './componenrs/header/header';
import Footer from './componenrs/footer/footer';
import Categories from './componenrs/categories/index';
import Products from './componenrs/products/details';
import Cart from './componenrs/cart/simplecart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Route exact path='/cart'>
          <Cart/>
        </Route>
        <Route exact path='/'>
          <Categories/>
          <Products/>
        </Route>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;