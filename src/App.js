import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Trains from './Components/Trains';
import Train from './Components/Train';
import Header from './Components/Header';


function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        
        <Route path='/' element={<Trains></Trains>}>
          

        </Route>
        <Route path='/train/:trainId' element={<Train></Train>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;