import './auth.styles.scss';
import authImage from '../../assets/auth-photo-rmbg.jpg';
import { signInWithGoogle } from '../../utils/firebase';
const Auth=()=>{
    return(
        <div className='auth-component'>
            <img src={authImage} alt="" width={300} />
            <p>Please sign in with your google account</p>
            <button className='button' onClick={signInWithGoogle}><i className="fa-brands fa-google"></i>Sign In</button>
        </div>
    )
}
export default Auth;