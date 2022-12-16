import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Cart from "./cart";
import Television from "./Television";
import Mobile from "./Mobile";
import Signup from "./Signup";
import Signin from "./Signin";

function AllRoutes() {
    
    return <div>
    
    <br />
    <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route exact path="/signin" element={<Signin/>}/> 
        <Route exact path="/signup" element={<Signup/>}/> 
        <Route exact path="/cart" element={<Cart/>}/> 
        <Route exact path="/television" element={<Television/>}/> 
        <Route exact path="/mobile" element={<Mobile/>}/>
        
    </Routes>
    
</div>;
}

export default AllRoutes;