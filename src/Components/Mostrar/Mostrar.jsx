import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { createContext, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { mt } from "../../firebase/firebase"
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "../ItemListContainer/ItemListContainer"



export const Mostrar = ()=>{
    


    const  [products,setProducts]= useState([])


    //Traer las dos colecciones aca
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



    

return(

        <ItemListContainer prod ={products}/>
        
    )

}

