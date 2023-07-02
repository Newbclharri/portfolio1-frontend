import './App.css';
//import components
import Header from './components/Header';
import Footer from './components/Footer';
//import Routes, Route components from react-router-dom
import { Routes, Route } from 'react-router-dom';
//import pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Tutorials from './pages/Tutorials';

function App() {
  //Heroku URL
  const URL = "https://thatsombracoder.onrender.com/";

  return (
    <div className="App">
      <Header/>      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About URL={URL} />} />
          <Route path="/projects" element={<Projects URL={URL} />} />
          <Route path="/tutorials" element={<Tutorials URL={URL} />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
