import './container.styles.scss';
import Navigation from '../navigation/navigation.component';
import { Fragment, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../routes/home/home.component';
import Disasters from '../../routes/disasters/disasters.component';
import Helpline from '../../routes/helpline/helpline.component';
const Container =()=>{
    const [isSideBarOpen,setIsSideBarOpen]=useState(false);
    const barsRef = useRef(null);

    const handleSidebarClick=()=>{
        setIsSideBarOpen(!isSideBarOpen);
    }

    return(
        <Fragment>
        <div className='container'><i className='fa-solid fa-bars' ref={barsRef} onClick={handleSidebarClick}></i></div>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/disasters' element={<Disasters/>}></Route>
            <Route path='/helpline' element={<Helpline/>}></Route>
        </Routes>
        <Navigation isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} barsRef={barsRef} />
        </Fragment>
    )
}
export default Container;