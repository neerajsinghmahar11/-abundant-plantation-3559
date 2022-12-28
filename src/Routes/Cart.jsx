import "./Television.css";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import CartProducts from "../Components/CartProducts";


    
    const Cart = () => {
        const [loader, setLoader] = useState(false);
        const [data, setData] = useState();
        
        const Remove =(id) => {
            
            fetch(`https://cheerful-dungarees-slug.cyclic.app/cart/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            }); 
        }
    useEffect(()=>{
        setLoader(true)
        axios
            .get("https://cheerful-dungarees-slug.cyclic.app/cart")
            .then(data => {
                setData(data.data)
                setLoader(false);
            })
            .catch(error => {
                console.log(error)
                setLoader(false);
            });
    },[])

    return (
        <div className="container" style={{ marginTop: "120px" }}>
            {loader ? <Loader /> : data?.map((item) => {
                return <CartProducts key={item.id} data={item} Remove={Remove} />
            })}
        </div>
    )
}
export default Cart;