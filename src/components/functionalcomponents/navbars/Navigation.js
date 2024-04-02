import { Link } from "react-router-dom"

const Header =()=>{
    const linkStyle={textDecoration:"none",margin:20,color:"white"}
    const liStyle={color:"white"}
    return(
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item" style={liStyle} >
        <Link style={linkStyle} to={"/"} >Home </Link>
      </li>
      <li className="nav-item">
      <Link style={linkStyle}  to={"/profile"} >Profile</Link>
      </li>
      <li className="nav-item">
      <Link style={linkStyle}  to={"/about"} >About</Link>
      </li>
      <li className="nav-item">
      <Link style={linkStyle} to={"/setting"} >Setting</Link>
      </li>
    </ul>
  </div>
</nav>

    )
}
export default Header