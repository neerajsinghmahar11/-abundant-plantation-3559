import "./Television.css"

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Cards from "../Components/Cards";
import Loader from "../Components/Loader";


const Music=()=>{
    const [loader,setLoader]=useState(false);
    const [data ,setData]=useState();
      
      useEffect(()=>{
          setLoader(true)
        axios
        .get("https://636d5048b567eed48abef381.mockapi.io/musicProduct")
        .then(data => {setData(data.data)
        setLoader(false);
        })
        .catch(error => {console.log(error)
        setLoader(false);
        });

        },[])

        console.log(data)

    return(
        <div className="container" style={{marginTop:"120px"}}>
            {loader ? <Loader /> : data?.map((item) => {return <Cards key={item.id} {...item}/>
  })}
            
            </div>
    )
}
export default Music;