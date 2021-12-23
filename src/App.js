import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
//import Detail from './routes/Detail';


//Route를 사용하기 위해선 npm install react-router-dom@5 으로 5 버전을 써야 한다
//6 버전은 <Routes></Routes>로 묶어줘야 하지만 내부가 보이지 않는다. 겨우 찾았네 ㅡ.ㅡ
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
