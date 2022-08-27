// import logo from './logo.svg';
import './App.css';
import ImageSlider from './Components/ImageSlider';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Navbar from './Components/Navbar';
import Section1 from './Components/Section1';
import Subscription from './Components/Subscription';
import PreviousBeg from './Components/PreviousBeg';
import GossipCorner from './Components/GossipCorner';
import LastSlider from './Components/LastSlider';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar key={95} />
      <div className='top-image-slider'>
        <ImageSlider key={96} />
      </div>
      <div className='section-1'>
        <Section1 key={97} />
      </div>
      <div className='subscription'>
        <Subscription key={98} />
      </div>
      <div className='prev-beg'>
        <PreviousBeg key={99} />
      </div>
      <div className='gossip'>
      <GossipCorner />
      </div>
      <div className='last-slider'>
        <LastSlider />
      </div>
      <div className='footer'>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
