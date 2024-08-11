import './disaster-img.styles.scss';
import PropTypes from 'prop-types';
const DisasterImg = ({disasterName,guideBtnRef,setIsGuideOpen,setSelectedGuide})=>{
    
    return(
        <div className='disaster-img-div'>
        <img src={`https://disaster-shield.netlify.app/assets/${disasterName}.jpeg`} alt="disaster-img" width={200} height={150} />
        <p>{disasterName.toUpperCase()}</p>
        <button  ref={guideBtnRef} onClick={(e)=>{
                e.stopPropagation()
            setIsGuideOpen(true)
        setSelectedGuide(disasterName)}}>Guidelines</button>
        </div>
    )
}
DisasterImg.propTypes={
    disasterName:PropTypes.string,
    guideBtnRef:PropTypes.object,
    setIsGuideOpen:PropTypes.func,
    setSelectedGuide:PropTypes.func,
}
export default DisasterImg;