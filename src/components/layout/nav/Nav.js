
import {Link} from "react-router-dom";


function Nav(){
    return (

            <div className= "d-flex justify-content-center">
                <div className="row text-center justify-content-around  w-75 ">
                    <div className=" col-lg-3 my-2 d-flex align-items-center justify-content-sm-center">
                        <Link className="nav-link text-dark navg" to="/projects"><h3>Mes Projets</h3></Link>
                    </div>
                    <div className=" col-lg-3 my-2 d-flex align-items-center justify-content-sm-center">
                        <Link className="nav-link text-dark navg" to="/biographie"><h3>Biographie</h3></Link>
                    </div>
                    <div className=" col-lg-3 my-2 d-flex align-items-center justify-content-sm-center">
                        <Link className="nav-link text-dark navg" to="/contact"><h3>Contact</h3></Link>
                    </div>
                </div>
            </div>  

    )
}
export default Nav;