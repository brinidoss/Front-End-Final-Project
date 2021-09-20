import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Test from './routes/Test';
import HomePage from '../src/components/HomePage';
import Form from './components/Form';
import { AuthContextProvider } from './Context/auth-context';
import Board from './components/Board';
import Footer from './components/Footer';
import ProjectDescription from './components/ProjectDescription';

//import TestProject from './components/TestProjects';


function App() {
  return (
    <AuthContextProvider>
    <div className="App">
      <Router>
        <NavBar/>
        <div className="main-content">
            <Route path="/" exact>
              <LandingPage/>
            </Route>
            <Switch>
              <Route path="/HomePage" exact>
                <HomePage />
              </Route>
              <Route path="/Test" exact>
                <Test/>
              </Route>
              <Route path="/Form" exact>
                <Form/>
              </Route>
              <Route path="/Board" exact>
                <Board/>
              </Route>
              <Route path="/Board/:id" exact>
                <ProjectDescription />
              </Route>
              
            </Switch>
            </div>
      
        
      </Router>

      
      
      
    
   
    </div>
    </AuthContextProvider>
  );
}

export default App;
