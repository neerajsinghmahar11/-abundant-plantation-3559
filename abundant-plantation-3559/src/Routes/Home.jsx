import "./Home.css";
import { NavLink } from "react-router-dom";
import Carousel from "../Components/Carousel";
import ReactCardSlider from '../Components/ReactCardSlider';
import axios from "axios";
import { useState,useEffect } from "react";

const Home=()=>{
    const upperCarousel = [
        {
          title: 'Design Projects 1',
          text:
            "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
          image:
            'https://www.reliancedigital.in/medias/Year-End-Sale-5000-Instant-Discount-Carousel-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDcwODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hiNS85OTI4MTY1NTg5MDIyLmpwZ3w4NDk3ZDFhZTM1YzUxYTg3MDFiMWZkZjhmMGE0ZWI2ZWZmYjU0MWNmOGJkMTAzZTYwMTdlNjI5MGNjYzZiOTIx',
        },
        {
          title: 'Design Projects 2',
          text:
            "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
          image:
            'https://www.reliancedigital.in/medias/Year-End-Sale-Carousel-Banner-15-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wyMjU4NjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGY3L2g4NC85OTMyMjI3MTgyNjIyLmpwZ3w2YWI4OWRjNTc0MjNlM2ZlOTcwMGI0M2UzNTQxZjUyZDgyMjUyYzExMzljM2NjNzczNTk1ZDg2YzIyZGM1OTQw',
        },
        
      ];


        const SecCarousel = [
            {
            title: 'Design Projects 1',
            text:"The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:'https://www.reliancedigital.in/medias/Laptop-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTcwNXxpbWFnZS9qcGVnfGltYWdlcy9oM2UvaDJiLzk5MzA5MTgwNjgyNTQuanBnfDM0NDIxMjI1ZmE2NjQ1MDk4MWY2MjJlMjU2Mjg0YzAxNDViYTRiM2YzMTEyYjU5OGUwNTZlNDY4NzcxYzk3M2Y',
            },
            {
            title:'Design Projects 2',
            text:"The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:'https://www.reliancedigital.in/medias/Accessories-Fiesta-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTAwN3xpbWFnZS9qcGVnfGltYWdlcy9oY2MvaDI5Lzk5Mjk4MTAyMTQ5NDIuanBnfGUxYTc3MTMzNThhNzlkZGQyNTNlYTYxMzM3OWM4NzQzYjY2YWYwYzFkNjhhMjA5M2YwNDhiYTMwMzA2ZGY5MTY',
            },
            {
            title:'Design Projects 2',
            text:"The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:'https://www.reliancedigital.in/medias/Smartwatch-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTMyMnxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGFmLzk5Mjk4MzI1NjI3MTguanBnfDBkOTJjZDk5YTI1MTU3NWU5MDc1NGQ0ZDg2YjFlOWRhOGRhN2FiMzgxMDY3YWI5Y2M1NDk0MjNjZjU1MzNjYjY',
            },
            {
            title:'Design Projects 2',
            text:"The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:'https://www.reliancedigital.in/medias/Winter-Sale-Carousel-Banner-2022.jpg?context=bWFzdGVyfGltYWdlc3w3ODA1OXxpbWFnZS9qcGVnfGltYWdlcy9oOGMvaDU3Lzk5MTgzMzY0MzQyMDYuanBnfDkxOGNjMWJiMjExYWUzYTQ0ODMzMTk5MjQ0YzY0YmVhNTE5ZjQxZTZjNzc4ZTRhNDhjYjc3N2I3NmZjNmM2ZDI',
            },
            {
            title:'Design Projects 2',
            text:"The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:'https://www.reliancedigital.in/medias/MacBook-Carousel-Banner-14-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w4OTk1MHxpbWFnZS9qcGVnfGltYWdlcy9oYjEvaGM4Lzk5MzA5MzA4NDc3NzQuanBnfDZkNWJmZTg0MDg4OWIyZmIyY2ZmYTAwNTNkZjU3Y2YwYjU5NTQ2MTBlMTZkNzZiYWUxN2JhZjIyYTg3ZTVjMzA',
            },
        
      ];
    

      const [musicData,setMusicData]=useState([]);
      
      useEffect(()=>{
        axios
        .get("https://636d5048b567eed48abef381.mockapi.io/musicProduct")
        .then(data => {setMusicData(data.data)
        })
        .catch(error => {console.log(error)
        });

        },[])
        
        
        const [televisionData,setTelevisionData]=useState([]);
        
        useEffect(()=>{
          axios
          .get("https://636d5048b567eed48abef381.mockapi.io/tv")
          .then(data => {setTelevisionData(data.data)
          })
          .catch(error => {console.log(error)
          });
  
          },[])
    return (
        <div style={{marginTop:"120px"}}>
        
        <Carousel cards={upperCarousel} />   
        <br />    
        <Carousel cards={SecCarousel} />       

    
        
        <h2 style="width: 95%; margin: auto;margin-top: 20px;font-weight: 400; ">GREAT DEALS ON ELECTRONICS</h2>

<div id="greatdeals" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
    <a href="#"><div><img src="https://www.reliancedigital.in/medias/Televisions-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w4MTU1NXxpbWFnZS9qcGVnfGltYWdlcy9oNDEvaDYwLzk5MTM3Nzc1MjA2NzAuanBnfGIxMjNhZGFhN2FiYzVmMTRmNjExNDkyOTliNjZkYmNhNjk5NDI5Y2ZkODU2MmNjZmViMmQ3N2FlY2EyZDZjYjk" alt="" /></div></a>
    <a href="#"><div><img src="https://www.reliancedigital.in/medias/True-Wireless-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0NjcyOXxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDljLzk5MTM3NzcyNTg1MjYuanBnfGY3MDIxZDZlYTBhMjEwYjQ4NGIzMmQwZjdjMzQ2M2FhYzIwYWE0NGE4MzFmYjRlZjQwNzFlZjk2NWMwMzYxN2Y" alt="" /></div></a>
    <a href="#"><div><img src="https://www.reliancedigital.in/medias/5G-smartphones-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w1NjI5MXxpbWFnZS9qcGVnfGltYWdlcy9oYTkvaDMwLzk5MTYxNzg1NjMxMDIuanBnfGNjMTViZWY2NDViY2YyYmI4MTc3YzhlNWU3NDViYzAwOTAzYWRiYmRmNzI2YzYzYTcwYTA5ZjVlNjQxZWJkYmQ" alt="" /></div></a>
    <a href="#"><div><img src="https://www.reliancedigital.in/medias/Smartwatches-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0OTAwNHxpbWFnZS9qcGVnfGltYWdlcy9oNzUvaDMxLzk5MTM3Nzc2NTE3NDIuanBnfDc0ZjgyYjQzZjcxNGYxMWUxMDdkOTk1Y2RlNTg2MWJlMTdmMmJlYTcwNmUxN2NhNTAzM2JmZTQxNmFjNjgzYjU" alt="" /></div></a>
    <a href="#"><div><img src="https://www.reliancedigital.in/medias/Washing-Machines-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0NDcwMHxpbWFnZS9qcGVnfGltYWdlcy9oNWIvaDUwLzk5MTM3Nzc3MTcyNzguanBnfGMyNWJhNDNiMTFkMjE4YmQ2OGRiMzdkMGIxNmZmZDhiYzViMTBjY2I1ZDllYzAyMWFjN2FlZTU1ZGVmMDk4MmU" alt="" /></div></a>
    <a href="#"><div><img src="https://www.reliancedigital.in/medias/Printers-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w1NjMwNnxpbWFnZS9qcGVnfGltYWdlcy9oZWIvaDRjLzk5MTM3Nzc1ODYyMDYuanBnfGZkMDA2YTU3ZTUxMGNjZTAwNjQxNmE3ZGZjNjg4NDI4NTE1ZDBhZWJhMThiZjMxMTJkNjdmMTliOWQ5ODdiNGY" alt="" /></div></a>
    <a href="#"><div><img src="https://www.reliancedigital.in/medias/MackBook-Appliances-Small-banners.jpg?context=bWFzdGVyfGltYWdlc3w0Mjc0NXxpbWFnZS9qcGVnfGltYWdlcy9oNTYvaDkyLzk5MTkwODgzMjg3MzQuanBnfDcxYmMyMDMxMjdiMzUxYzE2NmJkYTU4ZDBlNTQxNjBkZWViYjQ1Mzc2Y2IyOWYwNTllODhkNmRlZjA0NjM3NmI" alt="" /></div></a>
    <a href="#"><div><img src="https://www.reliancedigital.in/medias/Winter-Appliances-Small-banners.jpg?context=bWFzdGVyfGltYWdlc3w2ODA0M3xpbWFnZS9qcGVnfGltYWdlcy9oYTUvaDhmLzk5MTM3NzczMjQwNjIuanBnfDdjMTE5YzUzNjcyODZiNDljNGJlNDMzZTNkNGI5Nzg2ZjlhOTg0YmFhYTViOTZmOTFkNmY1MWRlZGQ4NWY5ZDY" alt="" /></div></a>

</div>

        <h2 style={{width:"95%",margin:"auto",marginTop:"20px",fontWeight:"700",fontSize:"20px"}} >DIGITAL AUDIO FEST | 
          <NavLink to="/music"><span style={{fontSize:"15px",fontWeight:"700",color:"blue"}}>VIEW ALL</span></NavLink>
        </h2>


        <ReactCardSlider style={{}} slides={musicData}/>
        <hr style={{marginTop:"30px",marginBottom:"30px"}} />
        <ReactCardSlider style={{}} slides={televisionData}/>

        </div>
    )
}
export default Home;