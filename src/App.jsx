import './App.css'
import { Fragment, useEffect, useState } from 'react'
import { auth } from './utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Auth from './components/auth/auth.component'
import { BrowserRouter } from 'react-router-dom';
import Container from './components/container/container.component';

function App() {
  const [user,setUser]=useState(null);

  useEffect(()=>{
    const checkAuthState=async()=>{
      const unsubscribe = onAuthStateChanged(auth,(user)=>{
        
        if(user){
          setUser(user);
        }else{
          setUser(null);
        }
      })
      return ()=> unsubscribe();
    }
    checkAuthState();
  },[user])
  
  return (
    <Fragment>
      {user ? (
        <BrowserRouter>
        <Container/>
        </BrowserRouter>
      ) : <Auth/>}
    </Fragment>
  )
}

export default App
