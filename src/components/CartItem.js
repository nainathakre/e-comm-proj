import React from 'react';

function CartItem() {
  return (
    <section className='cart-item-container'>
      <section className='cart-left-block'>
        <section className='cart-item-img'>
          <img src='/static/images/products/fruit-n-veg/kiwi-green.jpg' />
        </section>
        <section className='cart-item-details'>
          <h4>Apple - Washington, Regular, 4 pcs</h4>
          <section className='cart-item-actions'>
            <button>+</button>
            <span>1</span>
            <button>-</button>
            <span>x</span>
            <span>Rs.187</span>
          </section>
        </section>
      </section>
      <section className='cart-item-rate'>
        Rs.187
      </section>
    </section>
  );
}

export default CartItem;
