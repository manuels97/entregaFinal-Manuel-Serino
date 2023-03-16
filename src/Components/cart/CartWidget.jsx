import Carrito from '../../assets/carrito.png';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContex';

export const CartWidget = ()=>{
    const {getTotalProducts, productCartList} = useContext(CartContext);

    return(
        <div style={{backgroundColor:"white",borderRadius:"40%"}}>
        
                <>
                    <Link to="/cart">
                        <img src={Carrito} alt="mante" style={{width:40}}/>
                    </Link>
                    <span style={{width:"30px", heigth:"30px", fontSize:"30px", color:"black"}}>
                        {getTotalProducts()}
                    </span>
                </>
            
        </div>
    )
}