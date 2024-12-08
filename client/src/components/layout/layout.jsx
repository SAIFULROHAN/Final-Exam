import React from 'react';
import AppNav from "./appNav.jsx";
import Footer from "./Footer.jsx";
import {Toaster} from "react-hot-toast";

const Layout = (props) => {
    return (
        <>
            <AppNav/>
            {props.children}
            <Toaster position="bottom-center"/>
            <Footer/>
        </>
    );
};

export default Layout;