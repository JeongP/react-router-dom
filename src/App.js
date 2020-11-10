import logo from './logo.svg';
import './App.css';
import {BrowerRouter as Router, Route, Switch, Link, NavLink, useParams} from 'react-router-dom'
import { render } from 'react-dom';

function Home () {
  return (
    <div>
      <h2>Home</h2>
      home...
    </div>
    
  );
}

var contents = [
  {id:1, title:"HTML", desc:"Html is..."},
  {id:2, title:"JS", desc:"JS is..."},
  {id:3, title:"REACT", desc:"REACT is..."}
]

function Topic() {
  let param = useParams();
  // console.log(param)
  let id = param.topic_id
  let title, desc;
  for(var i=0;i<contents.length;i++) {
    if(Number(id) === contents[i].id) {
      title = contents[i].title;
      desc = contents[i].desc;
      break;
    }
    title = "Sorry";
    desc = "Not Found";
  }
  return(
    <div>
      <h3>{title}</h3>
      {desc}
    </div>
  );
}

function Topics () {
  
  var lis = [];
  for(var i=0;i<contents.length;i++) {
    lis.push(<li><NavLink to={"/topics/"+contents[i].id}>{contents[i].title}</NavLink></li>)
  }
  return(
    <div>
      <h2>Topics</h2>
      {/* 
        NavLink
        => Link Tag 에서 actve 속성 먹인거.
      */}
      <ul>
        {lis}
      </ul>
      <Switch>
        <Route path="/topics/:topic_id"><Topic></Topic></Route>
      </Switch>
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
