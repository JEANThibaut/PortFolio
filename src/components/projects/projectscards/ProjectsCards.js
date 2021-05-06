import React from 'react';
import jsonprojects from "../jsonprojects.json"

import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';



function ProjectsCards(){     


    return(   <div>
        {jsonprojects.map((project)=>{ 
            let projectImage = JSON.stringify(project.image)
            console.log(projectImage)
            return (
                <div>
                    <Card  style={{ width: '18rem' }}>
                        <CardBody>
                           
                            <CardTitle>{project.title}</CardTitle>
                            <CardSubtitle className="mb-2 ">{project.project}</CardSubtitle>
                            <CardText>
                                {project.description}
                            </CardText>
                            <div className="container d-flex justify-content-around">
                                <div><a href="#">{project.giturl}</a></div>
                                <div><a href="#"><div>{project.ghpage}</div></a></div>
                            </div>
                        </CardBody>
                    </Card> 
 
                </div>
            )
        })}
    </div>

    )
}
            
export default ProjectsCards;

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