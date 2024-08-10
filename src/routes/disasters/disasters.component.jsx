import './disasters.styles.scss';
import DisasterImg from '../../components/disaster-img/disaster-img.component';
import { Fragment, useEffect, useRef, useState } from 'react';
import { kits,guidelines } from '../../components/guidelines-tips';
import noGuideImage from '../../assets/no-guide.jpg';
const Disasters =()=>{
    const [isGuideOpen,setIsGuideOpen]=useState(false);
    const [selectedGuide,setSelectedGuide]=useState('null');
    const guideBtnRef = useRef(null);
    const guideRef = useRef(null);
    
    useEffect(()=>{
        if(isGuideOpen){
            const handleClickOutside =(event)=>{
                if(guideBtnRef.current && !guideBtnRef.current.contains(event.target) && guideRef.current && !guideRef.current.contains(event.target)){
                    setIsGuideOpen(false);
                }
            }
            document.addEventListener('click',handleClickOutside);
            return ()=>document.removeEventListener('click',handleClickOutside);
        }
    },[isGuideOpen]);
        
    return(
        <div className='disasters-div'>
            <div className='imgs'>
            {['earthquake','floods','hurricanes','thunder-storm','tsunami','wild-fire'].map((value,index)=>{
                return <DisasterImg key={index} disasterName={`${value}`} setSelectedGuide={setSelectedGuide} setIsGuideOpen={setIsGuideOpen} guideBtnRef={guideBtnRef}/>
            })}
            </div>
            <div className='guides'  ref={guideRef} onClick={(e)=>e.stopPropagation()}>
            {isGuideOpen ? <Fragment>
                <div className='guidelines'>
                <h3 >Guidelines</h3>
                <ul>
                {guidelines[selectedGuide].split('$').map((guideline)=>{
                    return <li key={guideline}>{guideline}</li>
                })}
                </ul>
                </div>
                <div className='kits'>
                <h3>Emergency kits</h3>
                <ul>
                    {kits[selectedGuide].split('$').map((kit)=>{
                        return <li key={kit}>{kit}</li>
                    })}
                </ul>
                </div>
                </Fragment> :
                <div className='no-guide-img'>
                <img src={noGuideImage}  width={200} alt="" />
                <p>Click on a guideline...</p>
                </div>
                    
            }
            </div>
        </div>
    )
}
export default Disasters;