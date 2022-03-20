import React from 'react';
import CartItem from './CartItem';

function CartList() {
  return (
    <>
      <section className='cart-container'>
        <section className='cart-heading'>
          <h2>My Cart</h2> &nbsp;
          <p>(<span>1</span> item)</p>
        </section>
        <section>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </section>
      </section>
    </>
  );
}

export default CartList;
