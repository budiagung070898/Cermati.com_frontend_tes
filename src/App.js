import './App.css';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import HighlightPanel from './component/HighlightPanel';
import Toast from './component/Toast';

function App() {
  return (
    <div className="App">
        <HeroSection/>
        <HighlightPanel/>
        <Toast/>
        <Footer/>
    </div>
  );
}

export default App;
