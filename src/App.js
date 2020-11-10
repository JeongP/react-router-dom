import logo from './logo.svg';
import './App.css';
import {BrowerRouter as Router, Route, Switch, Link} from 'react-router-dom'

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
      <ul>
        {/* Link => SPA에서의 특징 중 하나인 reload 없이 페이지 변환(?)을 시켜줌 */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Switch는 하나만 선택하고 나머지 것들은 버린다. */}
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path="/">Not Found</Route>
      </Switch>
    </div>
  );
}

export default App;
