
import {Link} from "react-router-dom";

import {Row, Col} from 'reactstrap';


function Nav(){
    return (

            <div className= "d-flex justify-content-around my-2">
                <Row className="text-center justify-content-around w-75 ">
                    <Col className="my-2 d-flex align-items-center justify-content-sm-center">
                        <Link className="nav-link text-dark navg" to="/projects"><h3>Mes Projets</h3></Link>
                    </Col>
                    <Col className="my-2 d-flex align-items-center justify-content-sm-center">
                        <Link className="nav-link text-dark navg" to="/biographie"><h3>Biographie</h3></Link>
                    </Col>
                    <Col className="my-2 d-flex align-items-center justify-content-sm-center">
                        <Link className="nav-link text-dark navg" to="/contact"><h3>Contact</h3></Link>
                    </Col>
                </Row>
            </div>  

    )
}
export default Nav;