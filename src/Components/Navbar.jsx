import {NavLink,Link} from "react-router-dom";
import "./Navbar.css";
import { BsCartPlusFill  } from 'react-icons/bs';

const colorh3={
        color:"white",
        textDecoration:"none"
}



function Navbar() {
    
    let Name=JSON.parse(localStorage.getItem("userName"));
    
    return (
<div style={{
    
}}>
        
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
        <NavLink style={{textDecoration:"none" ,display:"flex",alignItems:"center",justifyContent:"space-between",gap:"6px"}} exact activeClassName="active_class" to="/">
            <img style={{borderRadius:"50%",margin:"5px"}} src="https://tse2.mm.bing.net/th?id=OIP.QE0uFaFF46lWubnhzJqjugHaHa&pid" width={"80px"}  alt="" />
            <h1 style={{
                color:"#003380", fontWeight:"500"
                }}>
                    <span  style={{
                        color:"white",fontSize:"50px"
                        }}>G</span>
                    <span style={{fontWeight:"700",fontSize:"40px"}}>o</span><span style={{color:"white",fontSize:"50px"}}> S</span>  <span style={{fontWeight:"700",fontSize:"30px"}}>HOP</span></h1>
        </NavLink>
    </div>
    <div style={{margin:"auto"}}>
        <input 
        style=
        {{width:"700px",
        height:"35px",
        borderRadius:"20px",
        padding:"5px",
        paddingLeft:"20px",
        fontSize:"15px",
        border:"none"   
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
    
    <NavLink style={{textDecoration:"none", display:"flex",justifyContent:"center",alignItems:"center"}} exact activeClassName="active_class" to="/cart">
    <BsCartPlusFill style={{fontSize:"25px",color:"white"}}/>
    <h3 style={colorh3}>Cart</h3>
    </NavLink> 
    
    <h3 style={colorh3}>|</h3> 
    

    <NavLink style={{textDecoration:"none"}} exact activeClassName="active_class" to="/signin">
    <h3 style={colorh3}>{Name ? "Hi, "+Name : "Sign in"}</h3>
    </NavLink>
    </div>
    </div>

    <div className="nav2">
        <NavLink style={{textDecoration:"none"}} className="nav" exact  to="/television">
        <h3 style={colorh3}>Television</h3>
        </NavLink>
        <NavLink style={{textDecoration:"none"}} exact className="nav" to="/watches">
        <h3 style={colorh3}>Watch</h3>
        </NavLink>
        <NavLink style={{textDecoration:"none"}} exact className="nav" to="/music">
        <h3 style={colorh3}>Music</h3>
        </NavLink>
        <NavLink style={{textDecoration:"none"}} exact className="nav" to="/mobiles">
        <h3 style={colorh3}>Mobiles</h3>
        </NavLink>
        <Link style={{textDecoration:"none"}} exact className="nav" to="#">
        <h3 style={colorh3}>HOME APPLIANCES</h3>
        </Link>
        <Link style={{textDecoration:"none"}} exact className="nav" to="#">
        <h3 style={colorh3}>COMPUTERS</h3>
        </Link>
        <Link style={{textDecoration:"none"}} exact className="nav" to="#">
        <h3 style={colorh3}>CAMERAS</h3>
        </Link>
        <Link style={{textDecoration:"none"}} exact className="nav" to="#">
        <h3 style={colorh3}>ACCESSORIES</h3>
        </Link>
    </div>
</div>


    );
}

export default Navbar;