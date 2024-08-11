import './container.styles.scss';
import Navigation from '../navigation/navigation.component';
import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../routes/home/home.component';
import Disasters from '../../routes/disasters/disasters.component';
import Helpline from '../../routes/helpline/helpline.component';
import LandingPage from '../landing-page/landing-page.component';
import EmptyDivSpace from '../empty-div-space/empty-div-space.component';
import { GeoLocationContext } from '../../contexts/geo-loc.context';
const Container =()=>{
    const [isSideBarOpen,setIsSideBarOpen]=useState(false);
    const barsRef = useRef(null);
    const {handleSetGeoLocation}=useContext(GeoLocationContext);
    const handleSidebarClick=()=>{
        setIsSideBarOpen(!isSideBarOpen);
    }

    useEffect(()=>{
        const getLocation = () => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
              console.error("Geolocation is not supported by this browser.");
            }
          };
          
        const showPosition = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        handleSetGeoLocation({lat:latitude,long:longitude});
        };

        const showError = (error) => {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                console.error("User denied the request for Geolocation.");
                break;
                case error.POSITION_UNAVAILABLE:
                console.error("Location information is unavailable.");
                break;
                case error.TIMEOUT:
                console.error("The request to get user location timed out.");
                break;
                case error.UNKNOWN_ERROR:
                console.error("An unknown error occurred.");
                break;
            }
        }
        getLocation()

    },[handleSetGeoLocation]);

    return(
        <Fragment>
        <div className='container'><i className='fa-solid fa-bars' ref={barsRef} onClick={handleSidebarClick}></i></div>
        <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/live' element={<Home/>}></Route>
            <Route path='/disasters' element={<Disasters/>}></Route>
            <Route path='/helpline' element={<Helpline/>}></Route>
        </Routes>
        <Navigation isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} barsRef={barsRef} />
        <EmptyDivSpace/>
        </Fragment>
    )
}
export default Container;