import './App.css';
import Footer from './components/Footer';
// import HeaderContext from './components/HeaderContext';
// import LoginContext from './components/LoginContext';
import HeaderZustand from './components/HeaderZustand';
import LoginZustand from './components/LoginZustand';

function App() {
  return (
    <>
      {/* <HeaderContext /> */}
      {/* <LoginContext /> */}
      <HeaderZustand />
      <LoginZustand />
      <Footer />
    </>
  );
}

export default App;
