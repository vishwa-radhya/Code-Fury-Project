import {  createContext, useState } from "react";
import PropTypes from 'prop-types';
export const GeoLocationContext = createContext();

export const GeoLocationProvider=({children})=>{
    const [geoLocationPoints,setGeoLocationPoints]=useState({});

    const handleSetGeoLocation=(obj)=>{
        setGeoLocationPoints(obj);
    }

    return(
        <GeoLocationContext.Provider value={{geoLocationPoints,handleSetGeoLocation}}>
            {children}
        </GeoLocationContext.Provider>
    )
}
GeoLocationProvider.propTypes={
    children:PropTypes.node,
}