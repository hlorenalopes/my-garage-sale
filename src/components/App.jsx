import React from 'react';
import Header from './Header';
import Product from './Product';
import products from '.././products';

function App() {
  return (
    <div>
      <Header />
      {products.map((products) => (
        <Product
          key={products.id}
          name={products.name}
          imgURL={products.imgURL}
          description={products.description}
          price={products.price}
        />
      ))}
    </div>
  );
}

export default App;
