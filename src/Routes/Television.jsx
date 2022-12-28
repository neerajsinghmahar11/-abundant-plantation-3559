import "./Television.css"

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import Cards from "../Components/Cards";

const Television=()=>{
    const [loader,setLoader]=useState(false);
    const [data ,setData]=useState();


    useEffect(()=>{
    setLoader(true)
        axios
        .get("https://cheerful-dungarees-slug.cyclic.app/Products")
            .then(data => {setData(data.data)
            setLoader(false);   
        })
        .catch(error => {console.log(error)
        setLoader(false);
        });

        },[])

        // let televisionData=data.filter(item=>{
        //     return item.category=="Television";
        // })

    return(
        <div className="container" style={{marginTop:"120px"}}>
            {loader ? <Loader /> : data?.map((item) => { if(item.category==="Television"){return <Cards key={item.id} {...item}/>}
            })}
            
            </div>
    )
}
export default Television;