import React, { useState } from 'react';

const TestStocks = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product A', price: 20, stock: 10 },
        { id: 2, name: 'Product B', price: 15, stock: 15 },
        // ...other products
    ]);
    const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    if (product.stock > 0) {
      setCart([...cart, product]);
      setTotalPrice(totalPrice + product.price);
      // Update the product stock as well, if an item is added to the cart
      updateProductStock(product.id, product.stock - 1);
    }
  };
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    setTotalPrice(totalPrice - product.price);
    // Increase the product stock when an item is removed from the cart
    updateProductStock(product.id, product.stock + 1);
  };

  const updateProductStock = (productId, newStock) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, stock: newStock } : product
      )
    );
  };
  const placeOrder = () => {
    // Handle the order placement, e.g., send the cart data to a server
    // Reset the cart and total price after a successful order
    setCart([]);
    setTotalPrice(0);
  };
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} ({product.stock} in stock)
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>

      <button onClick={placeOrder}>Place Order</button>
    </div>
  )
}

export default TestStocks;


