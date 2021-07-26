import React from 'react'
import '../style/App.css'
import Footer from './Footer'
import Header from './Headers'
import Login from './Login'




function App() {

  return (
   <div>
     <Header/>
     <div>
       <Login/>
     </div>

     <Footer/>
   </div> 
  )
}

export default App
