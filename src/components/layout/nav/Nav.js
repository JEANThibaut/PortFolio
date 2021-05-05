import {Link} from "react-router-dom";


function Nav(){
    return (
     
            <div className="container text-center bg-dark ">
                <div className="card-body">
                    <Link className="nav-link" to="/projects"><h3>Mes Projets</h3></Link>
                </div>
                <div className="card-body">
                    <Link className="nav-link" to="/biographie"><h3>Biographie</h3></Link>
                </div>
                <div className="card-body bg-warning">
                    <Link className="nav-link" to="/contact"><h3>Contact</h3></Link>
                </div>
            </div>  

    )
}
export default Nav;