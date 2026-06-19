import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Spinner from '../components/Spinner'
import PopupNotice from '../components/PopupNotice'

const MainLayout = () => {
    const [showPopup, setShowPopup] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const isHomePage = window.location.pathname === '/' || window.location.pathname === '/LibertySS-College-Web/';
        if (isHomePage) {
            setShowPopup(true);
        }
    }, []);

    const handleClosePopup = () => {
        setShowPopup(false);
    }

    return (
        <div>
            {showPopup && <PopupNotice onClose={handleClosePopup} />}
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default MainLayout