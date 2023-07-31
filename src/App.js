import './App.css';
import { useState } from 'react';
//import components
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
import Modal from './components/Modal';
//import Routes, Route components from react-router-dom
import { Routes, Route } from 'react-router-dom';
//import pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Tutorials from './pages/Tutorials';
import Contact from './pages/Contact';

function App() {
  //Heroku URL
  const URL = "https://thatsombracoder.onrender.com/";
  const UrlPost = "http://localhost:5000/contact";
  const [isActive, setActive] = useState(false);
  const [modal, setModal] = useState(false);
  const toggleModal = ()=>{
    setModal((prev)=>!prev)
  }
  const turnOn = ()=>{
    setActive(false);
  }
  
  const turnOff = ()=>{
    setActive(true);
  }

  return (
    <div className="App">
      <div className="title"> <h1 className={isActive ? 'title-off': null}>ThatSombraCoder</h1> </div>
      <Header/> 
      <Aside turnOn={turnOn} turnOff={turnOff}/>     
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About URL={URL} toggleModal={toggleModal} modal={modal} turnOff={turnOff}/>} />
          <Route path="/projects" element={<Projects URL={URL} />} />
          <Route path="/tutorials" element={<Tutorials URL={URL} />} />
          <Route path="/contact" element={<Contact UrlPost={UrlPost} URL={URL} />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
