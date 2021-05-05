import React from 'react';
import jsonprojects from "../jsonprojects.json"

import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';


function ProjectsCards(props){     
 
    return(   
        <Card  style={{ width: '18rem' }}>
            <CardBody>
                <CardTitle>Titre</CardTitle>
                <CardSubtitle className="mb-2 ">Type du projet</CardSubtitle>
                <CardText>
                        Description
                </CardText>
                <div className=" container d-flex justify-content-around">
                    <div><a href="#">Lien1</a></div>
                    <div><a href="#">Lien2</a></div>
                </div>
            </CardBody>
        </Card>
    )
}
            
export default ProjectsCards;