import {Routes, Route} from "react-router-dom";
import Navbar from "../Components/Navbar";
import Login from "./Login";
import Home from "./Home";
import Cart from "./cart";
import Television from "./Television";
import Mobile from "./Mobile";

function AllRoutes() {
    return <div>
    <Navbar />
    <br />
    <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/> 
        <Route exact path="/cart" element={<Cart/>}/> 
        <Route exact path="/television" element={<Television/>}/> 
        <Route exact path="/mobile" element={<Mobile/>}/> 
    </Routes>
</div>;
}

export default AllRoutes;