import {Link} from "react-router-dom";

import {Row, Col,
   
} from 'reactstrap';

function DropNav(){

    return (
        
        <div className="container-fluid">
          
            <Row className=" d-flex justify-content-around">
            <Col className="text-center col-lg-3 my-3 mx-2 carte">
                    <Link to="/projects"><img src="img/imgLogo/idea.png" className="card-img-top" alt="Logo ampoule" /></Link>
                    <div className="card-body">
                         <Link className="nav-link" to="/projects"><h2>Mes Projets</h2></Link>
                        <p className="card-text">Site Web, Applications, Jeux, Venez découvrir l'ensemble des projets réalisés,
                             accéder à leurs détails ou venez les visiter directement! </p>
                    </div>
                </Col>
                <Col className="text-center col-lg-3 my-3 mx-2 carte">
                    <Link to="/biographie"><img src="img/imgLogo/livre.png" className="card-img-top" alt="Logo livre" /></Link>
                    <div className="card-body">
                    <Link className="nav-link" to="/biographie"><h2>Biographie</h2></Link>
                        <p className="card-text">Apprenez à me connaitre!</p>                       
                    </div>
                </Col>

                <Col className="text-center col-lg-3 my-3 mx-2 carte">
                    <Link to="/contact"><img src="img/imgLogo/enveloppe.png" className="card-img-top" alt="Logo enveloppe" /></Link>
                    <div className="card-body">
                        <Link className="nav-link" to="/contact"><h2>Contact</h2></Link>
                        <p className="card-text">Un Projet? Une question? N'hésitez pas à utiliser nle formulaire de contact!</p>                        
                    </div>
                </Col>
            </Row>
        </div>
    )
}


export default DropNav;