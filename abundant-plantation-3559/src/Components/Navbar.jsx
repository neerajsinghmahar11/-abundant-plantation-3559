import {NavLink} from "react-router-dom";
import "./Navbar.css";

const colorh3={
        color:"white",
        textDecoration:"none"
}



function Navbar() {

    return (
<div>
        
    <div
    style={{
        width:"100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background:"#e42529",
        height:"100px",
        position:"fixed",
        zIndex:"90",
    }}
    >
    <div style={{
        marginLeft:"50px"
    }}>
        <NavLink style={{textDecoration:"none"}} exact activeClassName="active_class" to="/">
            <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="" />
        </NavLink>
    </div>
    <div style={{margin:"auto"}}>
        <input 
        style=
        {{width:"700px",
        height:"25px",
        borderRadius:"20px",
        border:"none",
        padding:"5px",
        paddingLeft:"20px",
        fontSize:"15px",
        border:"1px Solid yellow"
    }} type="text" placeholder="Find Your Favorite Products" />
    </div>
    <div style={{
        display:"flex",
        marginRight:"50px",
        justifyContent:"space-between",
        width:"250px",
        
    }}>
    <NavLink style={{textDecoration:"none"}} exact activeClassName="active_class" to="/">
    <h3 style={colorh3} >Home</h3>
    </NavLink>

    <h3 style={colorh3}>|</h3>
    
    <NavLink style={{textDecoration:"none"}} exact activeClassName="active_class" to="/cart">
    <h3 style={colorh3}>Cart</h3>
    </NavLink> 
    
    <h3 style={colorh3}>|</h3> 
    
    <NavLink style={{textDecoration:"none"}} exact activeClassName="active_class" to="/login">
    <h3 style={colorh3}>Login</h3>
    </NavLink>
    </div>
    </div>

    <div className="nav2">
        <NavLink style={{textDecoration:"none"}} exact activeClassName="active_class" to="/television">
        <h3 style={colorh3}>Television</h3>
        </NavLink>
        <NavLink style={{textDecoration:"none"}} exact activeClassName="active_class" to="/mobile">
        <h3 style={colorh3}>Mobile</h3>
        </NavLink>
        <NavLink style={{textDecoration:"none"}} exact activeClassName="active_class" to="/login">
        <h3 style={colorh3}>Login</h3>
        </NavLink>
        <NavLink style={{textDecoration:"none"}} exact activeClassName="active_class" to="/login">
        <h3 style={colorh3}>Login</h3>
        </NavLink>
        <NavLink style={{textDecoration:"none"}} exact activeClassName="active_class" to="/login">
        <h3 style={colorh3}>Login</h3>
        </NavLink>
        <NavLink style={{textDecoration:"none"}} exact activeClassName="active_class" to="/login">
        <h3 style={colorh3}>Login</h3>
        </NavLink>
        <NavLink style={{textDecoration:"none"}} exact activeClassName="active_class" to="/login">
        <h3 style={colorh3}>Login</h3>
        </NavLink>
        <NavLink style={{textDecoration:"none"}} exact activeClassName="active_class" to="/login">
        <h3 style={colorh3}>Login</h3>
        </NavLink>
    </div>
</div>


    );
}

export default Navbar;