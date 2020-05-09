import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {

    const registrado = true;


    return (
        <>
            {registrado && <Navbar />}

            <div className="flex justify-center items-center">
                {children}
            </div>
        </>
    );
}

export default Layout;