import './App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Test from './routes/Test';
//import TestProject from './components/TestProjects';


function App() {
  return (
    <div className="App">

      <Test/>
      <NavBar/>
      <LandingPage/>
    
   
    </div>
  );
}

export default App;
