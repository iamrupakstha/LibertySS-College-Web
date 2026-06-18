import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Spinner from '../components/Spinner'
import PopupNotice from '../components/PopupNotice'

const MainLayout = () => {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] =useState(false);

  const location = useLocation();

  // first load
  useEffect(() => {
    const navEntries = performance.getEntriesByType('navigation');
    const navType = navEntries.length > 0 ? navEntries[0].type : 'navigate';

    const isFirstLoad = navType === 'navigate';
    const isReload = navType === 'reload';

    const isHomePage = window.location.pathname === '/';

    const timer = setTimeout(() => {
      setLoading(false);

      if((isFirstLoad || isReload) && isHomePage) {
        setShowPopup(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  const handleClosePopup =() => {
    setShowPopup(false);
  }
  return (
    <div>
      {loading ? (<Spinner/>) : (
      <>
      {showPopup && <PopupNotice onClose={handleClosePopup} />}
        <Navbar/>

        <main>
          <Outlet/>
        </main>

        <Footer/>
      </>
      )
    }
    </div>
  )
}

export default MainLayout