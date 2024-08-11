import './helpline.styles.scss';
import contactImg from '../../assets/contact-img.jpg';
import { useContext, useState } from 'react';
import { GeoLocationContext } from '../../contexts/geo-loc.context';
const Helpline =()=>{
    const [data,setData]=useState([]);
    const {geoLocationPoints,handleSetGeoLocation}=useContext(GeoLocationContext);

    const fetchNumbers=async(latitude,longitude)=>{
        const url = `https://api.disastercheckin.app/v1/countries/reverse-geocode?lat=${latitude}&long=${longitude}`;
        try{
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                  'Authorization': 'sk_live_6d04ae84-e53f-4b91-a1ef-a0488fe0b235',
                  'Content-Type': 'application/json' 
                }
              });
          
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
          
              const data = await response.json();  
              console.log(data.data);
                          
              setData(data.data);
        }catch(e){
            console.log(e);
            setData([]);
        }
    }

    const handleFetchHelplineNumbers=()=>{
        if(geoLocationPoints){
            fetchNumbers(geoLocationPoints.lat,geoLocationPoints.long);

        }else{
            setGeolocPoints()
        }
    }
    function setGeolocPoints(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
          } else {
            console.error("Geolocation is not supported by this browser.");
          }
        };
    
    function showPosition(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        handleSetGeoLocation({lat:latitude,long:longitude});
    }
    function showError(error){
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

    return(
        <div className='helpline-div'>
            <h1>Emergency Contacts</h1>
        <img src={contactImg} width={300} alt="" />
        <div className='numbers'>
        <p>NDRF Helpline Numbers : <span>011-24363260 , 9711077372</span></p>
        <p>Relief Commisioner For Natural Calamities : <span>1070</span></p>
        <p>Disaster Management N.D.M.A : <span>1078 , 011-26701700</span></p>
        <p>Air Ambulance : <span>9540161344</span></p>
        <p>Disaster Management Services : <span>108</span></p>
        <p>National Emergency Number : <span>112</span></p>
        </div>
        <div className='by-loc'>
            <p>Get Emergency Helpline Numbers Based on your Location.</p>
            <i className="fa-solid fa-phone"></i>
            <button onClick={handleFetchHelplineNumbers}>Get Numbers</button>
            {data && (
                <ul className='loc-ul'>
                    <li>Ambulance : {data.ambulanceNumber}</li>
                    <li>Emergency : {data.emergencyNumber}</li>
                    <li>Fire : {data.fireNumber}</li>
                    <li>Country : {data.name}</li>
                </ul>
            )}
        </div>
        </div>
    )
}
export default Helpline;