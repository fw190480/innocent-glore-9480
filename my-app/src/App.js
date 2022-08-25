// import logo from './logo.svg';
import './App.css';
import ImageSlider from './Components/ImageSlider';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='top-image-slider'>
        <ImageSlider />
      </div>
    </div>
  );
}

export default App;
