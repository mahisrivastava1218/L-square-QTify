import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    </>
  );
}
export default Home;