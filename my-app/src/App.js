// import logo from './logo.svg';
import './App.css';
import ImageSlider from './Components/ImageSlider';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Navbar from './Components/Navbar';
import Section1 from './Components/Section1';
import Subscription from './Components/Subscription';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='top-image-slider'>
        <ImageSlider />
      </div>
      <div className='section-1'>
        <Section1 />
      </div>
      <div className='subscription'>
        <Subscription />
      </div>
    </div>
  );
}

export default App;
