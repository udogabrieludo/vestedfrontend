import React, {useRef, useState}from 'react'
import IdleTimer from'react-idle-timer'
import {isAuthenticated, signout} from '../auth/index'
import {confirmAlert} from 'react-confirm-alert'
import { useHistory } from 'react-router-dom'



const IdleTimerContainer = () => {
    const idleTimerRef = useRef(null)
    const [visible, setVisible] = useState(false);

    let history = useHistory()
    
    const sessionTimerRef = useRef(null)
    
    
   
  const {user: {role}} = isAuthenticated();

  
  const onIdleUser = () =>{
    if(role === 0  || role === 1){
        setVisible(true);
       sessionTimerRef.current = setTimeout(logOut, 5000)
    }
    
 }
   
 const logOut = () => {
    
     signout(()=>{
     setVisible(false);
     history.push('/login');
     clearTimeout(sessionTimerRef.current);
    }); 
   
 };

  const stayActive = ()=>{
      setVisible(false);
      clearTimeout(sessionTimerRef.current);
  }

  
    const modalPop = ()=>{
      if(visible){
        confirmAlert({
            title: 'Alert!',
            message: `We noticed you're been idle for while, you will be logout soon?.`,
            buttons: [
              {
                label: 'Okay',
                onClick: ()=> logOut()   
              },
              {
                label: 'Cancel',
                onClick: () => {
                   stayActive();
                }
              }
            ]
          });
      }
       
        
    }
         
        
          

    
    return (
        <div>
            {/* {modalPop()}
            <IdleTimer ref={idleTimerRef} timeout={5 * 1000} onIdle={onIdleUser}></IdleTimer> */}
        </div>
    )
}

export default IdleTimerContainer
