import React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContex';
import CartForm from './CartForm';
import { CartItem } from './CartItem/CartItem';

export const CartContainer = () => {
  const {productCartList, clearProductCartList,addtocart} = useContext(CartContext);

  const items = null

  return (
    <div>
      <p>Carrito de compras</p>
      <div>
      
        {
          productCartList.length>0 ?
          <>
          <button onClick={clearProductCartList}>Vaciar carrito</button>
            {
              productCartList.map(item=>(
                <CartItem key={item.id} item={item} />
                            
              ))
            } <CartForm item={productCartList} ></CartForm>
            {/* <button onClick={addtocart(productCartList)}></button> */}
            <hr/>
          </>
          :
          <p>No hay productos en el carrtio</p>
        }
      </div>
    </div>
  )
}
