//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Create from './Create';
import Slide from './Slide';
import Coupon from './Coupon';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Slide />
      <h1 className='toppics'>Top Picks For You</h1>
      <Create />
      <Coupon />
      <Footer />
    </div>

  );
}

export default App;
