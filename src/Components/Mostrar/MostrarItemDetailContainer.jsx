// import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"
// import { useEffect, useState } from "react"
// import { mt } from "../../firebase/firebase"
// import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer"

// export const MostrarItemDetailContainer = ()=>{
    
//     const  [products,setProducts]= useState([])


    
//     const productsCollection = collection(mt,"normales")    
    
    
//     const getProducts= async () =>{
//         const data = await getDocs (productsCollection)
    
//     setProducts(
//         data.docs.map((doc)=>({...doc.data(),id:doc.id}))
//     )
            
//     }

//     const deleteProduct= async(id)=>{
//     const productDoc= doc(mt,"normales",id)
//     await deleteDoc (productDoc)
//     getProducts()
//     }

//     useEffect(()=>{
//         getProducts()
//     },[])





// return(

//         <ItemDetailContainer prod ={products}/>
        
//     )

// }

