import { useContext, useEffect, useState } from "react";
import './ItemListContainer.css';
// import { ItemCount } from "../ItemCount/ItemCount"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { mt } from "../../firebase/firebase";
import { arregloProductos } from "../ItemDetailContainer/stock";


export const ItemListContainer = ()=>{


//Aca traigo los productos de firebase, pero no puedo utilizarlos porque tengo problemas para cargar cuando se cambia de pagina, funciona pero mal

    const  [products,setProducts]= useState([])

    const productsCollection = collection(mt,"normales")    
    
    
    const getProducts= async () =>{
        const data = await getDocs (productsCollection)
    
    setProducts(
        data.docs.map((doc)=>({...doc.data(),id:doc.id}))
    )
            
    }

    const deleteProduct= async(id)=>{
    const productDoc= doc(mt,"normales",id)
    await deleteDoc (productDoc)
    getProducts()
    }

    useEffect(()=>{
        getProducts()
    },[])



    const {tipoProducto} = useParams();

    
    
    // Traigo los productos de un arreglo
    
    const [productos, setProductos] = useState([]);


    let promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arregloProductos);
        }, 0);
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            if(!tipoProducto){
                setProductos(resultado)
            } else{
                const nuevaLista = resultado.filter(item=>item.categoria === tipoProducto);
                setProductos(nuevaLista)
            }
        })
    },[tipoProducto])

    
    
    

    return(

        <div className="item-list-container">
            <p>LISTA DE MANTEQUILLAS</p>            
            <ItemList items={productos}/>
        </div>
        
    )
    }