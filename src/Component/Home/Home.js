import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='text-center my-4'>
            <Link to='/resume'><Button >My Resume</Button></Link>
        </div>
    );
};

export default Home;