import {Routes, Route} from "react-router-dom";
import Navbar from "../Components/navbar";
import Login from "./Login";
import Home from "./Home";

function AllRoutes() {
    return <div>
    <Navbar />
    <br />
    <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/> 
    </Routes>
</div>;
}

export default AllRoutes;