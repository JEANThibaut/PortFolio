import React from 'react';
import jsonprojects from "../jsonprojects.json"


import {Row, Col,
        Card, CardText, CardBody,
        CardSubtitle
  } from 'reactstrap';



function ProjectsCards(){     
   
    return(   
        <Row className="d-flex justify-content-center align-items-center my-2 scroll ">
            {jsonprojects.map((project)=>{ 
                return (                    
                    <Col lg="5" md="4" sm="8">
                        <Card className= "text-center my-2 carte">
                            <CardBody className="Card">
                                <img  src={project.image} alt={project.image} className="imgCards bg-dark"/>
                                <CardSubtitle className="mb-2">{project.project}</CardSubtitle>
                                <CardText>
                                    
                                    {project.description}
                                </CardText>
                                <div className="container d-flex justify-content-around">
                                
                                    <div><a className="btn btn-secondary" href={project.giturl} target="_blank">Voir le code</a></div>
                                    <div><a className="btn btn-secondary" href={project.ghpage} target="_blank"><div>Visiter le Site</div></a></div>
                                </div>

                            </CardBody>
                            
                        </Card> 
                        
                    </Col>
                    
                )
            })}
        </Row>

    )
}
            
export default ProjectsCards;

