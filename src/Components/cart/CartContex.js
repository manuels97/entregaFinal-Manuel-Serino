import { createContext, useEffect, useState } from "react";
import { arregloProductos } from "../ItemDetailContainer/stock";
import {mt} from "../../firebase/firebase"
import { collection, addDoc } from "firebase/firestore";



export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (id)=>{
        const elementExists = productCartList.some((elemento)=>elemento.id === id);
        return elementExists;
    }

    const addProduct = (product, qty)=>{
        const newList = [...productCartList];
        if(isInCart(product.id)){
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + qty;
            newList[productIndex].totalPrice = newList[productIndex].quantity * newList[productIndex].price;
            setProductCartList(newList)
        } else{
            const newProduct={...product, quantity:qty, totalPrice: qty*product.price}
        
            const newList = [...productCartList];
            newList.push(newProduct);
            setProductCartList(newList);
        }
    }

    const removeProduct = (idProduct)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== idProduct);
        setProductCartList(newArray);
    }

    const clearProductCartList=()=>{
        setProductCartList([])
    }

    const getTotalProducts = ()=>{
        const totalProducts = productCartList.reduce((acc,item)=>acc + item.quantity,0);
        return totalProducts;
    }

    useEffect(() => {
        mt.collection("cart")
            .onSnapshot((querySnapshot) => {
                var p = [];
                querySnapshot.forEach((doc) => {
                p.push(doc.data());
                arregloProductos.map((i) => {
                    if (i.id == doc.data().id) {
                    i.cart = true
                    }
                })
                });
        
                setCart(p)
            });
        
        }, []);
        const [cart, setCart] = useState([])

            function addtocart(item) {


                    arregloProductos.map((i) => {
                    if (i.id == item.id) {
                        i.cart = true
                    }
                    })
                
                    mt.collection('cart').doc(`1`).set(item)
            
            }
        
    return(
        <CartContext.Provider value={{productCartList,addProduct, removeProduct, clearProductCartList, isInCart, getTotalProducts, addtocart}}>
            {children}
        </CartContext.Provider>
    )
}