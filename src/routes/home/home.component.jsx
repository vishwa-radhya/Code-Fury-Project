import { useContext, useState } from 'react';
import './home.styles.scss';
import { GeoLocationContext } from '../../contexts/geo-loc.context';

const Home=()=>{
  const [liveData,setLiveData]=useState([]);
  const [nearLiveData,setNearLiveData]=useState([]);

  const {geoLocationPoints,handleSetGeoLocation}=useContext(GeoLocationContext);
  function handleLiveResults(){
    if(geoLocationPoints){
      fetchLiveUpdates(geoLocationPoints.lat,geoLocationPoints.long);
    }else{
      setGeolocPoints()
    }
  }

  function handleNearLocationDisastersFetch(){
    if(geoLocationPoints){
      fetchNearLocationUpdates(geoLocationPoints.lat,geoLocationPoints.long);
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

async function fetchNearLocationUpdates(latitude='22.561267',longitude='79.783213'){
    const url = 'https://api.ambeedata.com/disasters/latest/by-lat-lng';

    let options = {
      method: 'GET',
      qs: {lat: `${latitude}`, lng: `${longitude}`, limit: '10', page: '1'},
      headers: {'x-api-key': '7b18d3746b92cf7ea8e92e22e3a740cecdc3f3e63cfbdbdd14f8328223c31e54', 'Content-type': 'application/json'}
    };
    try{
      const response = await fetch(url,options);
      const result =  await response.json();
      setNearLiveData(result.result);
    }catch(e){
      console.log(e);
      setNearLiveData([]);
    }
}

  async function fetchLiveUpdates(latitude='9.573032',longitude='77.676685'){
    const url = `https://api.disastercheckin.app/v1/events?lat=${latitude}&long=${longitude}`;
    
    try {
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
      setLiveData(data.data)
    } catch (error) {
      console.error("Error fetching disaster events:", error);
      setLiveData([]);
    }
  }

    return(
        <div className='home-div'>
        <div className='all-div'>
            <p>Get Live Disaster Updates</p>
            <h4>Click Here</h4>
            <div>
            <button type="button" className='all-button' onClick={handleLiveResults}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-repeat"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                ></path>
              </svg>
              Refresh
            </button>
            </div>
            <div className='cards'>
              {liveData && liveData.map((data)=>{
                return (<div key={data.id} className='card'>
                    <p>{data.description}</p>
                    <h4>{data.severity}</h4>
                  </div>)
              })}
            </div>
        </div>
        <div className='lat-long-div'>
        <p>Get Live Disaster Updates Near You</p>
        <h4>Needs Approval of Your Location.</h4>
        <div>
        <button type="button" className='all-button' onClick={handleNearLocationDisastersFetch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-repeat"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
          ></path>
          <path
            fillRule="evenodd"
            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
          ></path>
        </svg>
        Refresh
      </button>
            </div>
            <div className='cards'>
            {nearLiveData && nearLiveData.map((data)=>{
              return (<div key={data['source_event_id']}>
                  <p>{data.event_name}</p>
                  <p>{data.date}</p>
                  <p>{data.continent}</p>
                </div>)
            })}
            </div>
        </div>
        </div>
    )
}
export default Home;