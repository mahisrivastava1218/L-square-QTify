import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero'
import styles from './Home.css';
import MyCard from '../components/Card/Card';
function Home() {
  return (
    <>
    <div className={styles.container}>
    <Navbar/>
    <Hero/>
    <MyCard/>
    </div>
    </>
  );
}
export default Home;