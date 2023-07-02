
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminFikirler from './components/AdminFikirler';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path='/' element={< AdminFikirler />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
