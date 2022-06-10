
import './App.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Home from './components/Home';
import  Navbar  from './components/Navbar';
import Newsletter from './components/Newsletter';
import Roadmap from './components/Roadmap';
import ScrollToTop from './components/ScrollToTop';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Home/>
    <AboutUs/>
    <SignUp/>
    <Roadmap/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App;
