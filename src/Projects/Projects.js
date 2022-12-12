import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Projects = ({projects}) => {
    const {id, project_point, project_name} = projects;
    const handleDetails = () =>{

    }
    return (
        <div>{id}
            {project_name}
            {project_point}
            <Link to={`/project/${id}`}><Button onClick={() => handleDetails}>Details</Button></Link>
        </div>
    );
};

export default Projects;