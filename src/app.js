import React from 'react';
import Header from './componenrs/header/header';
import Footer from './componenrs/footer/footer';
import Categories from './componenrs/categories/index';
import Products from './componenrs/products/details';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Categories/>
        <Products/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;