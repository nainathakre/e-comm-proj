import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

function CartList() {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    let productsInCart = sessionStorage.getItem('cart');
    productsInCart = JSON.parse(productsInCart) || [];
    setCartList(productsInCart);
  }, []);

  const inc = (prod) => {
    let productsInCart = sessionStorage.getItem('cart');
    productsInCart = JSON.parse(productsInCart) || [];
    const selectedProdIndex = productsInCart.findIndex(item => item.id === prod.id);
    productsInCart[selectedProdIndex].qty = productsInCart[selectedProdIndex].qty + 1;
    sessionStorage.setItem('cart', JSON.stringify(productsInCart));
    setCartList(productsInCart);
  };

  const dec = (prod) => {
    let productsInCart = sessionStorage.getItem('cart');
    productsInCart = JSON.parse(productsInCart) || [];
    const selectedProdIndex = productsInCart.findIndex(item => item.id === prod.id);
    if (productsInCart[selectedProdIndex].qty === 1) {
      productsInCart.splice(selectedProdIndex, 1);
    } else {
      productsInCart[selectedProdIndex].qty = productsInCart[selectedProdIndex].qty - 1;
    }
    sessionStorage.setItem('cart', JSON.stringify(productsInCart));
    setCartList(productsInCart);
  };

  const getTotal = () => {
    const total = cartList.reduce((prev, curr) => {
      return (curr.qty * curr.price) + prev;
    }, 0);
    return total;
  }

  if (cartList.length === 0) {
    return (
      <section className='cart-container'>
        <section className='cart-heading'>
          <h2>My Cart</h2> &nbsp;
        </section>
        {cartList.length === 0 && (
          <div style={{ 
            "display": "flex", 
            "flexDirection": "column",
            "marginLeft": "10px",
            "marginRight": "10px",
            "justifyContent": "center",
            "alignItems": "center",
            "textAlign": "center"
            }}>
            <section>
              <h4>No items in your cart</h4>
              <p>Your favorite items are just a click away</p>
            </section>
            <button style={{ background: "red", color: "#fff", padding: "10px 15px", borderRadius: "4px", cursor: "pointer", outline: "none", "border": "none" }}>
              Start shopping
            </button>
          </div>
        )}
      </section>
    );
  }

  return (
    <>
      <section className='cart-container'>
        <section className='cart-heading'>
          <h2>My Cart</h2> &nbsp;
          {cartList.length === 0 && (
            <>
              <section>
                <h4>No items in your cart</h4>
                <p>Your favorite items are just a click away</p>
              </section>
              <button>
                Start shopping
              </button>
            </>
          )}
          <p>(<span>{cartList.length}</span> item{cartList.length > 1 ? 's' : ''})</p>
        </section>
        <section>
          {cartList.map((element) => {
            return <CartItem product={element} key={element.id} inc={inc} dec={dec} />
          })}
        </section>

        <button 
          style={{ marginTop: "20px", padding: "10px 15px", background: "#ad4747", color: "#fff", border: "none", outline: "none", borderRadius: "3px", cursor: "pointer"}}>
          Proceed to Checkout Rs.{getTotal()} 
        </button>
      </section>
    </>
  );
}

export default CartList;
