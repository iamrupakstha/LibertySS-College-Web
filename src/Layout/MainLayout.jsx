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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of f7efc22 (update-1)
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
<<<<<<< HEAD
=======
    setLoading(true);
>>>>>>> parent of f7efc22 (update-1)

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
<<<<<<< HEAD
=======
    const handleClosePopup = () => {
        setShowPopup(false);
>>>>>>> 4d256a67b157a3f54204c8bd7b518c85e731ac25
=======
>>>>>>> parent of f7efc22 (update-1)
    }
    </div>
  )
}

export default MainLayout