import React, { useContext } from 'react'
import { CartContext } from '../CartContex.js';
import './CartItem.css';
import Swal from 'sweetalert2'

export const CartItem = ({item}) => {
    const {removeProduct, addtocart} = useContext(CartContext);


    const confirm=(item)=>{
        Swal.fire({
            title: 'Finalizar compra?',
            text: "Si haces click confirmaras tu compra",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, confirmar compra'
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Compra realizada!',
                'Felicitaciones',
                'success'
                
                ) 
            } return item
            })}

    return (
        <div className='carrito-container'>
            <div className='carrito-img-container'>
                <img src={item.img} alt={item.Prod}/>
            </div>
            <div className='carrito'>
                <p>{item.Prod}</p>
                <p>Precio: {item.Precio}</p>
                <p>cantidad: {item.quantity}</p>
                <p>Precio total: {item.quantity*item.Precio}</p>
                <button onClick={()=>removeProduct(item.id)}>Eliminar producto</button>                
            </div>
        </div>
    )
}
