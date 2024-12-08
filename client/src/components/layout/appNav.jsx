import React, {useEffect} from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import {Link, useNavigate,NavLink} from "react-router-dom";
import logo from "../../assets/images/logo-regular-free-img (1).png"
import UserStore from "../../store/UserStore.js";
import UserSubmitButton from "../layout/UserSubmitButton.jsx";


const AppNav = ()=>{
    const {isLogin,UserLogoutRequest}=UserStore();

    const onLogout=async ()=>{
        await UserLogoutRequest()
        sessionStorage.clear();
        localStorage.clear();
        window.location.href="/"
    }

    useEffect(() => {
        (async ()=>{
            if(isLogin()){

            }
        })()
    }, []);


    return(
        <nav className="navbar bg-transparent navbar-expand-lg navbar-light m-0 py-3">
           <div className="container-fluid px-4">
               <Link className="navbar-brand" to="/">
                   <img className="img-fluid" src={logo} alt="logo" width="210px" />
               </Link>
               <div className="row">
                   <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">



                            <span className="nav-item me-4 sty bodySmal nav">


                                <Link className="n ms-2 btn nav" to="/">Home</Link>
                                <Link to="/about" type="button" className=" btn ms-2 nav">About</Link>
                                <Link to="/blog" type="button" className=" btn ms-2 nav">Blog</Link>
                                <Link to="/service" type="button" className=" btn ms-2 nav">Service</Link>
                                <Link to="/contact" type="button" className=" btn ms-2 nav">Contact</Link>

                            </span>

                       {
                           isLogin() ? (
                               <>
                                   <UserSubmitButton onClick={onLogout} text="Logout" className="btn ms-3 btn-success d-flex" />
                                   <Link type="button" className="btn ms-3 btn-success d-flex" to="/dashboard">
                                       Dashboard
                                   </Link>
                               </>
                           ) : (
                               <>
                                   <Link type="button" className="btn ms-3 btn-success d-flex" to="/login">
                                       Login
                                   </Link>
                               </>
                           )
                       }


                       {location.pathname.startsWith("/dashboard") ? (
                           <LogoutButton />
                       ) : (
                           <Nav.Link as={Link} to="/dashboard/blogs">
                               <div className="btn btn-sm btn-outline-secondary">
                                   Dashboard
                               </div>

                           </Nav.Link>
                       )}


                   </ul>



               </div>
           </div>
        </nav>
    )
}


export default AppNav;