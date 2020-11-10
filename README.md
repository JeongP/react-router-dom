# React Router DOM

React Router DOM의 개념들을 익히고 사용해보자.

## 개념

### `Router`

react router DOM의 wrapper component로
가장 최상단 컴포넌트 밖에 씌워준다.
> Example
``` javascript
ReactDOM.render(
  <Router>
  <App />
  </Router>,
  document.getElementById('root')
);
```



### `Route`

url path에 따라 어떤 Component가 실행될지 정해주는 녀석.
> Example
``` javascript
<Route exact path="/"><Home></Home></Route>
```



### `Link`
HTML의 a 태그처럼 url 경로를 지정해주는 녀석.
> Example
``` javascript
<ul
  <li><Link to="/">Home</Link></li>
  <li><Link to="/topics">Topics</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>
```

### `Switch`
여러 url들이 route처리되어 있을 때, 하나의 경로를 선택하고 나머지 경로는 버릴 수 있게 구조적으로 만드는 방법(?)
>Example: '/와 같이 다른경로에도 포함되어 있는 경로를 지정할 땐
``` javascript
<Switch>
  <Route exact path="/"><Home></Home></Route>
  <Route path="/topics"><Topics></Topics></Route>
  <Route path="/contact"><Contact></Contact></Route>
  <Route path="/">Not Found</Route>
</Switch>
```

### `useParams`
url에 동적 데이터를 넘겼을 때, 데이터를 param으로 받아올 수 있게 하는 녀석.
> Example
``` javascript
<Route path="/topics/:topic_id"><Topic></Topic></Route>
```
> 이런식으로 넘기고
``` javascript
let param = useParams();
```
> 이런식으로 받아온다.


