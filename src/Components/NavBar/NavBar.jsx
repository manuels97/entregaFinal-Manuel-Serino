import logoQ from "../../assets/logoQ.png"
import {NavLink, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {CartWidget} from  "../cart/CartWidget"
import { Button, ButtonGroup } from "react-bootstrap";
import "./NavBar.css"

export const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                <div>
                    <img className='nav-brand' src={logoQ}></img>
                </div>
            </Link>
        
            
                <Button  variant="secondary"
                        menuVariant="dark">
                <NavLink className="inicio"
                to="/">INICIO </NavLink></Button>



                <DropdownButton
                        id="dropdown-button-dark-example2"
                        variant="secondary"
                        menuVariant="dark"
                        title="CATEGORIAS"
                        className="mt-2"
                    >
                        <Dropdown.Item href="#/action-1" active>
                                    <NavLink 
                                    to="/productos/normal">NORMALES </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            <NavLink 
                            to="/productos/big">BIG</NavLink>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        
                </DropdownButton>

            <div>
                <CartWidget/>
            </div>

            
        </nav>
    );
}


