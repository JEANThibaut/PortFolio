import {Link} from "react-router-dom";


function Nav(){

    return (
        
        <div className="container-fluid">
          
            <div className="row d-flex justify-content-around">
                <div className="card text-center col-lg-3 my-5">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                         <Link className="nav-link" to="/projects"><h2>Mes Projets</h2></Link>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card text-center col-lg-3 my-5" >
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                    <Link className="nav-link" to="/biographie"><h2>Biographie</h2></Link>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                       
                    </div>
                </div>

                <div className="card text-center col-lg-3 my-5 ">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <Link className="nav-link" to="/contact"><h2>Contact</h2></Link>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Nav;