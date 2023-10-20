import Assignment3 from "./a3";
import {Link} from "react-router-dom";
import Nav from "../Nav";

function Labs() {
    return(
       <div className="container">
         <Nav/>
         <Link to="/hello">Hello</Link> |
         <Link to="/Labs/a3">A3</Link> |
         <Link to="/Kanbas">Kanbas</Link>
        <Assignment3/>
       </div>
    );
 }
 export default Labs;