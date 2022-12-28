import "./Television.css"

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import Cards from "../Components/Cards";

const Watch=()=>{
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


    return(
        <div className="container" style={{marginTop:"120px"}}>
            {loader ? <Loader /> : data?.map((item) => { if(item.category=="Mobile"){return <Cards key={item.id} {...item}/>}
  })}
            
            </div>
    )
}
export default Watch;