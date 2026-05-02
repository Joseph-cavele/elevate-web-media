import './App.css'
import {BrowserRouter,Routes,Route,useLocation} from "react-router-dom"


import { HomePage } from './Page/Home';
import { Footer } from './Components/Sections/Footer';
import { TopBar } from './Components/Sections/TopBar';
import { Navbar } from './Components/Sections/Navbar'
import AboutPage from './Page/AboutUs';
import OurServices from './Page/OurServices';
import { ConsultationForm } from './Forms/ConsultationForm';
import { ProtectedRoute } from './Components/ProtectedRoute';
import ProjectInquiry from './Forms/ProjectInquiryForm';
import ContactForm from './Components/Sections/Contact';
import { ContactPage } from './Page/ContactPage';

import { useEffect } from 'react';
import { Notfound } from './Components/Sections/NotFound';
import { TrackPage } from './hooks/Trackingpage';


 function App() {


    

  

  return (

    <BrowserRouter>
    <TrackPage/>
    <TopBar/>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contact' element={<ProtectedRoute><ContactPage/></ProtectedRoute>}/>
      <Route path='/about' element={<ProtectedRoute><AboutPage/></ProtectedRoute>}/>
      <Route path='/services' element={<ProtectedRoute><OurServices/></ProtectedRoute>}/>
      <Route path='/consultation' element={<ProtectedRoute><ConsultationForm/></ProtectedRoute>}/>
      <Route path='/projectinquiry' element={<ProjectInquiry/>}/>
      

    </Routes>
    
    <Footer/>
    </BrowserRouter>
  
             
        
          
      
      
    
  
  )
}

export default App
