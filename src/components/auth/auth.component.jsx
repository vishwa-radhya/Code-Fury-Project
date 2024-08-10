import './auth.styles.scss';
import authImg from '../../assets/auth-nobg.png';
import { signInWithGoogle } from '../../utils/firebase';
import logo from '../../assets/emc-alt-svgrepo-com.svg';
const Auth=()=>{
    return(
        <div className='auth-component'>
        <div className='auth-logo'>
            <img src={logo} alt="logo" />
            <p>Disaster Shield <span style={{fontSize:'0.7rem'}}>Be Prepared, Stay Safe</span></p>
            </div>
            <img src={authImg} alt="" width={300} />
            <p>Please sign in with your google account</p>
            <button className='button' onClick={signInWithGoogle}><i className="fa-brands fa-google"></i>Sign In</button>
        </div>
    )
}
export default Auth;