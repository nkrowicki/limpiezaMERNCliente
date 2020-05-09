import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div>
                {/*Nav*/}
                <nav className="bg-gray-900 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto w-full z-50 top-0">
                    <div className="flex flex-wrap justify-end items-center">


                        <div className="flex w-full pt-2 justify-between">
                            <div className="ml-3 md:mr-3">
                                <p className="inline-block py-2 px-4 text-white no-underline"> Hola, Usuario!</p>
                            </div>
                            <ul className="list-reset flex justify-end md:flex-none items-center text-gray-600">
                                <li className="md:mr-3">
                                    <NavLink to={'/clientes'} exact activeClassName="text-white" className="inline-block py-2 px-4 no-underline">Ver clientes</NavLink>
                                </li>
                                <li className="md:mr-3">
                                    <NavLink to={'/nuevo-cliente'} exact activeClassName="text-white" className="inline-block no-underline hover:text-gray-200 hover:text-underline py-2 px-4">Nuevo Cliente</NavLink>
                                </li>
                                <li className="md:mr-3">
                                    <NavLink to={'/'} className="inline-block no-underline hover:text-gray-200 hover:text-underline py-2 px-4">Salir</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <div className="flex flex-col md:flex-row">
                    <div className="bg-gray-900 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
                        <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                            <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                                <li className="mr-3 flex-1">
                                    <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                                        <i className="fas fa-tasks pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Tasks</span>
                                    </a>
                                </li>
                                <li className="mr-3 flex-1">
                                    <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                                        <i className="fa fa-envelope pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Messages</span>
                                    </a>
                                </li>
                                <li className="mr-3 flex-1">
                                    <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600">
                                        <i className="fas fa-chart-area pr-0 md:pr-3 text-blue-600" /><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Analytics</span>
                                    </a>
                                </li>
                                <li className="mr-3 flex-1">
                                    <a href="#" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                                        <i className="fa fa-wallet pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Payments</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
                        <div className="bg-blue-800 p-2 shadow text-xl text-white">
                            <h3 className="font-bold pl-2 bg-red-500">Analytics</h3>
                        </div>
                        
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default Navbar;