import logo from './logo.svg';
import './App.css';
import {BrowerRouter as Router, Route} from 'react-router-dom'

function Home () {
  return (
    <div>
      <h2>Home</h2>
      home...
    </div>
    
  );
}

function Topics () {
  return(
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}

function Contact() {
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <li><a href="/">Home</a></li>
      <li><a href="/topics">Topics</a></li>
      <li><a href="/contact">Contact</a></li>
      <Route exact path="/"><Home></Home></Route>
      <Route path="/topics"><Topics></Topics></Route>
      <Route path="/contact"><Contact></Contact></Route>
    </div>
  );
}

export default App;
