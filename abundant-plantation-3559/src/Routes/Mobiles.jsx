import "./Television.css"

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import OtherCards from "../Components/OtherCards";


const Watch=()=>{
    const [loader,setLoader]=useState(false);
    const [data ,setData]=useState();
      
      useEffect(()=>{
          setLoader(true)
        axios
        .get("https://636e114fb567eed48ad1f04d.mockapi.io/apple_iphone")
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
            {loader ? <Loader /> : data?.map((item) => {return <OtherCards key={item.id} {...item}/>
  })}
            
            </div>
    )
}
export default Watch;