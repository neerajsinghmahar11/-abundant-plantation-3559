import {Link} from "react-router-dom";

function Navbar() {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background:"#e42529",
        padding:"20px"
      }}
    >
    <div>
        <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="" />
    </div>
    <div >
        <input 
        style=
        {{width:"700px",
        height:"25px",
        borderRadius:"20px",
        border:"none",
        padding:"5px",
        textAlign:"center"
        }} type="text" placeholder="Search Product" />
    </div>
    <div>
    <Link to="/">
    <button>Home</button>
    </Link> 
    <Link to="/login">
    <button>Login</button>
    </Link> 
    </div>
    </div>
  );
}

export default Navbar;