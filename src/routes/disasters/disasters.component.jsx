import './disasters.styles.scss';
import DisasterImg from '../../components/disaster-img/disaster-img.component';
const Disasters =()=>{
    return(
        <div className='disasters-div'>
            <div className='imgs'>
                <DisasterImg disasterName='earthquake'/>
                <DisasterImg disasterName='floods'/>
                <DisasterImg disasterName='hurricanes'/>
                <DisasterImg disasterName='thunder-storm'/>
                <DisasterImg disasterName='tsunami'/>
                <DisasterImg disasterName='wild-fire'/>
            </div>
            <div className='guides'>
                <div className='guidelines'>
                <h3 >Guidelines</h3>
                </div>
                <div className='tips'>
                <h3>Emergency tips</h3>
                </div>
            </div>
        </div>
    )
}
export default Disasters;