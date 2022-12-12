import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Projects from '../../Projects/Projects';

const Home = () => {
    const projects = useLoaderData();
    return (
        <div className='text-center my-4'>
            <Link to='/resume'><Button >My Resume</Button></Link>
            {
                projects.map(projects => <Projects
                    key={projects.id}
                    projects={projects}
                ></Projects>)
            }
        </div>
    );
};

export default Home;