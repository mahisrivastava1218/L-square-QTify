import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import styles from './Home.css';
function Home() {
  return (
    <>
    <div className={styles.container}>
    <Navbar/>
    <Hero/>
    </div>
    </>
  );
}
export default Home;