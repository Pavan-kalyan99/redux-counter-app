import React, { useEffect, useState } from 'react'
// import {addDoc, collection} from  'firebase/firestore'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword
,signOut} from  'firebase/auth'
import {auth} from './init_firebase';
import { useNavigate } from 'react-router-dom';


import Home from './Home';
// import { getRedirectResult } from 'firebase/auth';


const  Listmovies=()=> {
    const navi= useNavigate();
  const[reg,setReg]=useState(" ");
  const[regpass,setpass]=useState(" ");

  const[logEmail,setlogEmail]=useState("");
  const[logPass,setlogPass]=useState("");

  const [user,setUser]=useState({});


  // const [presentUser,setPresentUser]=useState(null);
 
  // useEffect(()=>{
  //   onAuthStateChanged(auth,(presentUser)=>{
  //     setPresentUser(presentUser
  //       // uid:user.uid,email:user.email
  //     );
  //   });
  // },[])

  const Register=async()=>{
    try{
    const user =await createUserWithEmailAndPassword(auth,reg,regpass).
    then(alert("submitted"));
    navi('/');

    }
    
    catch(error){
      console.log(error.message)
    }
    setReg("");

  }
  const login=async()=>{

    try{
      const user =await signInWithEmailAndPassword(auth,logEmail,logPass)
      }
      // navigate('/Home')
      catch(error){
        console.log(error.message)
      }
      
      setlogEmail("");

  }
  const sigOut=async()=>{
   await signOut(auth)
  }
  
  return (
    <div>       
        <h3>Register here</h3>
        <div>
        {/* <form onSubmit={submitHand}> */}
          <input  placeholder='enter email' 
               onChange={e=>setReg(e.target.value)}/>
          <input placeholder='password' 
          onChange={e=>setpass(e.target.value)}/>
          <button  onClick={Register} type="submit">Register</button>
        {/* </form>  */}
        </div>

        <h3>Login here</h3>  
        <div>
          <input  placeholder='enter email' 
               onChange={e=>setlogEmail(e.target.value)}/>
          <input  placeholder='password' 
               onChange={e=>setlogPass(e.target.value)}/>
          <button onClick={login} type="submit">Login</button>
    
        </div>
        <div>
        {/* {presentUser? <Home />:<Home />} */}

          <h2>USER log:</h2>
          {/* {presentUser?.email} */}
          <button onClick={sigOut}>Signout</button>
        </div>
           
    </div>
  )
}
export default Listmovies
