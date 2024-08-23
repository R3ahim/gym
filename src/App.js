import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimoniials from './components/Testimonials/Testimoniials';
function App() {
  return (
    <div className="App">
        <Hero/>
        <Programs/>
        <Reasons/>
        <Plans/>
        <Testimoniials/>
        <Footer/>
    </div>
  );
}

export default App;
