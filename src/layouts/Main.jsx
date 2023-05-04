import React, { useContext } from 'react';
import Menubar from '../pages/Menubar/Menubar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import { AuthContext } from '../providers/AuthProvider';


const Main = () => {
    const {loading}=useContext(AuthContext);
    if(loading){
        return <div className='max-w-sm mx-auto '><div className="radial-progress text-primary " style={{ "--value": 100 }}>100%</div></div>
    }
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;