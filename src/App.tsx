import './App.css';
import Footer from './components/Footer';
// import HeaderContext from './components/HeaderContext';
// import LoginContext from './components/LoginContext';
// import HeaderZustand from './components/HeaderZustand';
import HeaderRTK from './components/HeaderRTK';
// import LoginZustand from './components/LoginZustand';
import LoginRTK from './components/LoginRTK';

import Countdown from './components/Countdown';

function App() {
  return (
    <>
      {/* <HeaderContext /> */}
      {/* <LoginContext /> */}
      {/* <HeaderZustand /> */}
      {/* <LoginZustand /> */}
      <Countdown />
      <HeaderRTK />
      <LoginRTK />
      <Footer />
    </>
  );
}

export default App;
