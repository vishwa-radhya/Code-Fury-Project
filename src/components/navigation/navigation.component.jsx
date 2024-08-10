import { useEffect, useRef, useState } from 'react';
import './navigation.styles.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Navigation=({isSideBarOpen,setIsSideBarOpen,barsRef})=>{
    const navRef = useRef(null);
    const timeoutRef = useRef(null);
    const [openSidebar,setOpenSidebar]=useState(false);

    useEffect(()=>{
        if(isSideBarOpen){
            timeoutRef.current = setTimeout(()=>{
                setOpenSidebar(true);
            },300)
        }else{
            setOpenSidebar(false);
        }
        return ()=>clearTimeout(timeoutRef);
    },[isSideBarOpen]);

    const sideBarStyles={
        width:isSideBarOpen ? '11em' : '0',
    }

    useEffect(()=>{
        if(isSideBarOpen){
            const handleClickOutside = (event)=>{
                if(navRef.current && !navRef.current.contains(event.target) && barsRef.current && !barsRef.current.contains(event.target) ){
                    setIsSideBarOpen(false);
                }
            }
            document.addEventListener('click',handleClickOutside);
            return ()=>document.removeEventListener('click',handleClickOutside);
        }
    },[isSideBarOpen,setIsSideBarOpen,barsRef]);

    return(
            <div className="navigation-bar" style={sideBarStyles} ref={navRef}>
            {openSidebar && <div className='nav-bar-items'>
                <Link to='/'><p><i className="fa-brands fa-space-awesome"></i>Home</p></Link>
                <Link to='/live'><p><i className="fa-solid fa-tower-broadcast"></i>Live</p></Link>
                <Link to='/disasters'><p><i className="fa-solid fa-tornado"></i>Disasters</p></Link>
                <Link to='/helpline'><p><i className="fa-solid fa-hand-holding-hand"></i>HelpLine</p></Link>
            </div>}
        </div>
    
    )
}
Navigation.propTypes={
    isSideBarOpen:PropTypes.bool,
    setIsSideBarOpen:PropTypes.func,
    barsRef:PropTypes.object,
}
export default Navigation;