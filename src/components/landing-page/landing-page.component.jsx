import './landing-page.styles.scss';
import landingPageImg from '../../assets/landing-page-img.jpg'
const LandingPage = () =>{
    return(
            <div className='landing-page'>
                <div className='info'>
                    <h1>Your safety starts here</h1>
                    <p>Over the past decade, over 300 natural disasters occur yearly around the world affecting millions and cost billions.</p><p>Preparation can save lives, minimize damage and reduce stress.</p>
                    <h4>Learn how to protect your loved ones in the event of natural disasters</h4>
                    <ol>
                        <li><i className='fa-solid fa-link'></i>Live Disasters</li>
                        <li><i className='fa-solid fa-link'></i>Disaster Guidelines</li>
                        <li><i className='fa-solid fa-link'></i>Helpline Numbers</li>
                    </ol>
                </div>
                <div className='image'>
                    <img src={landingPageImg} width={350}></img>
                    <div className='points'>
                    <h4><i className="fa-solid fa-angles-right"></i>  DISASTER PLANNING</h4>
                    <h4><i className="fa-solid fa-angles-right"></i>  MANAGEMENT</h4>
                    <h4><i className="fa-solid fa-angles-right"></i>  PREPAREDNESS</h4>
                    </div>
                </div>
            </div>
    )
}
export default LandingPage;