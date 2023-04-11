import logo from './logo.svg';
import './App.css';
import Navbar  from './navbar';
import Home from './Home';

function App() {
  const title = "Welcome to the new Blog";

  return (
    <div className="App">
      <Navbar />
      

      <div className="content">
        <Home />
      </div>
      
    </div>
  );
}

export default App;

