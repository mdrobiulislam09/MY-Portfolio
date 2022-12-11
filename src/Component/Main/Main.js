import React from 'react';
import { Outlet } from 'react-router-dom';
import Navvbar from '../Navbar/Navvbar';

const Main = () => {
    return (
        <div>
            <Navvbar></Navvbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;