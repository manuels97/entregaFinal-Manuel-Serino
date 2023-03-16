import { useContext } from 'react';
import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { CartContext } from './CartContex';


function CartForm(item) {

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

            const {addtocart} = useContext(CartContext);


            const formEmail= <input>aaassss</input>



    return (
        <Form  style={{backgroundColor:"lightblue", paddingTop:"10px"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Confirmar Email</Form.Label>
            <Form.Control type="email" placeholder="Confimar email" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" placeholder="Nombre y Apellido" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="number" placeholder="Ingresa Telefono" />
        </Form.Group>
            <Button onClick={addtocart(item)} variant="primary" type="submit" >
            Enviar orden
        </Button>
        
        </Form>
    );
}

export default CartForm;