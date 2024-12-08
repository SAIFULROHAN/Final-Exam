import {BrowserRouter, Route, Routes, useLocation,NavLink} from "react-router-dom";
import {useEffect} from "react";
import Home from "./pages/home-page.jsx";
import About from "./pages/about-page.jsx";
import Blog from "./pages/blog-page.jsx";
import Service from "./pages/service-page.jsx";
import Contact from "./pages/contact-page.jsx";
import LoginPage from "./pages/login-page.jsx";
import OtpPage from "./pages/otp-page.jsx";
import DashboardLayout from "./components/dashBoard.jsx";
import DashboardBlogs from "./pages/dashBoardBlog.jsx";
import DashboardTeam from "./pages/dashBoardTeam.jsx";
import DashboardServices from "./pages/dashBoardService.jsx";
import ProtectedRoute from './components/ProtectedRoute.jsx';

function ScrollToTopOnNavigation() {
    const { pathname } = useLocation();
    useEffect(() => {
        const scroll = () => {
            window.scrollTo(0, 0);
        };
        requestAnimationFrame(scroll);
    }, [pathname]);
    return null;
}
const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTopOnNavigation />


              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/contact" element={<Contact/>}/>
                  <Route path="/login" element={<LoginPage/>}/>
                  <Route path="/otp" element={<OtpPage/>}/>

                  <Route path="/dashboard/blogs" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>

                      <Route path="/dashboard/blogs" element={<DashboardBlogs />} />
                      <Route path="teams" element={<DashboardTeam />} />
                      <Route path="services" element={<DashboardServices />} />

                  </Route>


                  <Route path="/dashboard/" element={<DashboardLayout />}>


                  </Route>
              </Routes>


        </BrowserRouter>

    );
};
export default App;