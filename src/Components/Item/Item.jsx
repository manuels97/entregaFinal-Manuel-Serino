import './Item.css';
import {Link} from 'react-router-dom';


export const Item = ({item})=>{
    return(
        <div className="tarjeta-producto">
            <img src={item.img} alt={item.Prod} className="item-mante"/>
            <h4>{item.Prod}</h4>
            <p>$ {item.Precio}</p>
            <Link to={`/item/${item.id}`}>
                <button className='boton-ver'>Ver mas...</button>
            </Link>
        </div>
    )
}