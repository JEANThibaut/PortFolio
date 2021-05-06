import {Link} from "react-router-dom";


function Nav(){
    return (
     
            <div className="row text-center justify-content-around bg-dark ">
                <div className=" col-lg-2 my-2">
                    <Link className="nav-link" to="/projects"><h3>Mes Projets</h3></Link>
                </div>
                <div className=" col-lg-2 my-2">
                    <Link className="nav-link" to="/biographie"><h3>Biographie</h3></Link>
                </div>
                <div className=" bg-warning col-lg-2 my-2">
                    <Link className="nav-link" to="/contact"><h3>Contact</h3></Link>
                </div>
            </div>  

    )
}
export default Nav;