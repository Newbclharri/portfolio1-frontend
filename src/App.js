import './App.css';
import { useState, useLayoutEffect } from 'react';
import { FiHome, FiUserCheck, FiTrello, FiYoutube, FiMessageCircle } from "react-icons/fi";
//import components
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
// import Window from './components/Window';
//import Routes, Route components from react-router-dom
import { Routes, Route } from 'react-router-dom';
//import pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Tutorials from './pages/Tutorials';
import Contact from './pages/Contact';


function App() {
  //Web Service URL
  const URL = "https://thatsombracoder.onrender.com/";
  const UrlPost = "http://localhost:5000/contact";
  const size = 26;
  const [isActive, setActive] = useState(false);
  const[show, setShow] = useState(false);
  const [widthFrame, setWidthFrame] = useState("");
  const [heightFrame, setHeightFrame] = useState("");
  const widthDiv = 745, heightDiv = 450;
  const [navList, setNavList] = useState
    ([
      {
        title: "HOME",
        lower(){
          return this.title.toLowerCase();
        },
        icon: <FiHome size={size} />
      },
      {
        title: "ABOUT",
        lower(){
          return this.title.toLowerCase();
        },
        icon: <FiUserCheck size={size} />
      },
      {
        title: "PROJECTS",
        lower(){
          return this.title.toLowerCase();
        },
        icon: <FiTrello size={size} />
      },
      {
        title: "TUTORIALS",
        lower(){
          return this.title.toLowerCase();
        },
        icon: <FiYoutube size={size} />
      },
      {
        title: "CONTACT",
        lower(){
          return this.title.toLowerCase();
        },
        icon: <FiMessageCircle size={size} />
      }
    ]);

  const toggleDropdown = ()=>{
    setShow((prev)=>!prev)
  }

  const turnOffDropdown = (e)=>{
    const classDiv = e.target.className;
    const docEle = document.documentElement;
    console.log( "top",classDiv, show)
    if(show){
      console.log("inside conditional")
      docEle.style.setProperty("--mobile-menu-top-color", "transparent")
      setShow((prev)=> prev = false)
    }
  }

  const turnOn = () => {
    setActive(false);
  }

  const turnOff = () => {
    setActive(true);
  }

  const windowWidth = useWindowWidth();

  useLayoutEffect(() => {
    const getFrameStyle = () => {
      const docStyle = getComputedStyle(document.documentElement)
      const width = docStyle.getPropertyValue("--frame-width");
      const height = docStyle.getPropertyValue("--frame-height");
      setWidthFrame(width);
      setHeightFrame(height);
    }

    getFrameStyle();
  }, [])

  function useWindowWidth() {
    const [size, setSize] = useState(window.innerWidth);
    useLayoutEffect(() => {
      window.addEventListener('resize', () => setSize(window.innerWidth))
      return () => window.removeEventListener('resize', setSize)
    }, [])

    return size;

  }

  //component
  function ShowWindowWidth() {
    const width = useWindowWidth();
    return (
      <>
        <h3>{width}px</h3>
      </>
    )
  }

  return (
    <div className="App" onClick={turnOffDropdown}>
      <div className="title"> <h1 className={isActive ? 'title-off' : null}>ThatSombraCoder</h1> </div>
      <Header navList={navList} turnOn={turnOn} turnOff={turnOff} show={show} toggleDropdown={toggleDropdown}/>
      <div className="App-align">
        <ShowWindowWidth />
        <Aside turnOn={turnOn} turnOff={turnOff} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About URL={URL}  turnOff={turnOff} busCardTitle={useWindowWidth() < 581 ? "Tap Me!":"Business Card"}/>} />
          <Route path="/projects" element={<Projects URL={URL} frameSize={{width: widthDiv, height: heightDiv}} windowWidth={windowWidth}/>} />
          <Route path="/tutorials" element={<Tutorials URL={URL} frameSize={{ width: String(widthDiv), height: String(heightDiv)}} />} />
          <Route path="/contact" element={<Contact UrlPost={UrlPost} URL={URL} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
