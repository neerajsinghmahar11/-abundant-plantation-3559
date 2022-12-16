// import { useEffect } from "react";
// import { useState } from "react";
import Carousel from "../Components/Carousel";


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
    
    return (
        <div style={{marginTop:"120px"}}>
        <h1>Home page</h1>
        
        <Carousel cards={upperCarousel} />   
        <br />    
    
        <Carousel cards={SecCarousel} />       
        </div>
    )
}
export default Home;