import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Cart from "./cart";
import Television from "./Television";
import Signup from "./Signup";
import Signin from "./Signin";
import Music from "./Music";
import Watch from "./Watch";
import Mobiles from "./Mobiles";
import "../Components/Navbar.css"

function AllRoutes() {
    
    return <div>
    
    <br />
    <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route exact path="/signin" element={<Signin/>}/> 
        <Route exact path="/signup" element={<Signup/>}/> 
        <Route exact path="/cart" element={<Cart/>}/> 
        <Route exact path="/television" element={<Television/>}/> 
        <Route exact path="/watches" element={<Watch/>}/>
        <Route exact path="/mobiles" element={<Mobiles/>}/>
        <Route exact path="/music" element={<Music/>}/>
        
    </Routes>
    
</div>;
}

export default AllRoutes;