
import { React } from 'react';
import './App.css';
import { Route, Routes,BrowserRouter, Navigate } from 'react-router-dom';
import Login from './login';
import Quiz from './quiz';
import Otpcheck from './otpcheck';

import Quiz1 from './quiz1'


function App() {

  

  return (
    <div className="App">
       <Routes>
        <Route path='quizbuild'   element={<Login   title='Quiz App'/>}> </Route>
        <Route path='/' element={<Login   title='Quiz App'/>}>
              
        </Route>
        <Route path='quizbuild/otp' element={<Otpcheck  />} />
        
        <Route path='quiz' element={<Quiz />} />
        <Route path='quizbuild/quiz1' element={<Quiz1 />} />
       
       </Routes>
      
    </div>
  );
  
}

export default App;
