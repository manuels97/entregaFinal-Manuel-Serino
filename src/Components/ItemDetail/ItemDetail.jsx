import { useState,useContext } from 'react';
import './ItemDetail.css';
import {Link} from 'react-router-dom';
import { CartContext } from '../cart/CartContex.js';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({item})=>{
    const {addProduct} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    const onAdd = (count)=>{
        addProduct(item,count);
        setQuantity(count);
    }
    

    return(
        <div className='detail'>
            <p style={{width: "100%"}}>Producto:</p>
            <div className='img-container'>
                <img src={item.img} alt={item.Prod} className="itemDetail-img"/>
            </div>
            <div className='img-container'>
                <h4>{item.Prod}</h4>
                <h5>$ {item.Precio}</h5>
                <p>{item.desc}</p>
            </div>
            <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
            {
                quantity>0 &&
                <Link to="/cart">
                    <button>Ir al carrito</button>
                </Link>
            }
        </div>
    )
}