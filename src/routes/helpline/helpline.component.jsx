import './helpline.styles.scss';
import contactImg from '../../assets/contact-img.jpg';
const Helpline =()=>{
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
        </div>
    )
}
export default Helpline;