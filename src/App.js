// import Listmovies from "./Listmovies";
// import Home from "./Home";
// import {auth} from './init_firebase';
// import { useState,useEffect } from "react";
// // import {  onAuthStateChanged,} from 'firebase/auth'
// // import { NavLink,useNavigate } from 'react-router-dom';
// // import { createBrowserRouter,RouterProvider,Route } from "react-router-dom";
// // const router=createBrowserRouter([
// //   {
// //     path:"/",
// //     element:<Home />
// //   }
// // ])
// function App() {
//   // const[presentUser,setPresentUser]=useState(null)
//   // useEffect(()=>{
//   //     auth.onAuthStateChanged(user=>{
//   //      setpresentUser({
//   //       uid:user.uid,email:user.email
//   //      })
//   //     });
//   //   },[])


//   // useEffect(()=>{
//   //   onAuthStateChanged(auth,(presentUser)=>{
//   //     setPresentUser(presentUser
//   //       // uid:user.uid,email:user.email
//   //     );
//   //   });
//   // },[])
//   return (
//     <div className="App">
//      <h2>working well</h2>
//      <center>
//      <Listmovies />
//       {<h3>hii</h3>}
//       <h2>USER log:</h2>
//         {/* {presentUser?.email} */}
//      {/* {presentUser? <Home />:<Listmovies/>} */}
//      </center>
 
//     </div>
//   );
// }

// export default App;
import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { Increment,Decrement,Addby } from './Redux/Action';


const App = () => {
  const dispatch=useDispatch();
  const state=useSelector(state=>state.Reducer);
  return (
    <div>
      <center>   <h1>Counter App</h1>
      <h2> Number:{state}</h2>
      <button onClick={()=>dispatch(Increment())}>Increment</button>
 
      <button onClick={()=>dispatch(Decrement())}>Decrement</button>
      <button onClick={()=>dispatch(Addby())}> ADD BY 10</button>
      </center>
   
    </div>
  )
}

export default App