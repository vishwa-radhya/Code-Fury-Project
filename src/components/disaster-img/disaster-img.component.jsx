import './disaster-img.styles.scss';
import PropTypes from 'prop-types';
const DisasterImg = ({disasterName})=>{
    return(
        <div className='disaster-img-div'>
        <img src={`/src/assets/${disasterName}.jpeg`} alt="" width={200} height={150} />
        <p>{disasterName.toUpperCase()}</p>
        <button>Guidelines</button>
        </div>
    )
}
DisasterImg.propTypes={
    disasterName:PropTypes.string,
}
export default DisasterImg;