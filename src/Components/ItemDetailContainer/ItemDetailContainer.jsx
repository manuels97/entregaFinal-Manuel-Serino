import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { mt } from "../../firebase/firebase"
import { arregloProductos } from "./stock";

export const ItemDetailContainer = ()=>{

    
    // const  [products,setProducts]= useState([])


    
    // const productsCollection = collection(mt,"normales")    
    
    
    // const getProducts= async () =>{
    //     const data = await getDocs (productsCollection)
    
    // setProducts(
    //     data.docs.map((doc)=>({...doc.data(),id:doc.id}))
    // )
            
    // }

    // const deleteProduct= async(id)=>{
    // const productDoc= doc(mt,"normales",id)
    // await deleteDoc (productDoc)
    // getProducts()
    // }

    // useEffect(()=>{
    //     getProducts()
    // },[])
    
    
    
    const {productId} = useParams();
    
    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const product = arregloProductos.find(item=>item.id ===(id));
            resolve(product)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            setItem(producto);
        }
        getProducto();
    },[productId])
    
    
    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}></p>
            <ItemDetail item={item}/>
        </div>    
    )
    }