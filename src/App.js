import React from 'react';
import axios from 'axios';

class App extends React.Component {
  //상태 부분
  state = {
    isLoading: true, //영화 앱 로딩 중 상태 변수
    movies: [], //영화 데이터가 저장될 배열
  }
  //데이터 흐름
  //render()로 로딩중 표시 하는 동안 
  //getMovies에 데이터 저장한 뒤 
  //componentDidMount()로 데이터 호출

  //async : getMovies() 함수는 비동기 함수라고 선언
  getMovies = async () => {
    //await : axios.get()는 작업이 끝날때까지 기다려 달라고 선언 
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
  }

  //render()는 로딩중으로 표시 되는 동안 비동기 함수인 getMovies() 실행
  componentDidMount() {
    this.getMovies();
  }

  //클래스 형에서는 render()이 반환 함수다.
  render() {
    //로딩중 상태
    const { isLoading } = this.state;

    //로딩 중 or 준비 완료 상태 (삼항 연산자)
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
