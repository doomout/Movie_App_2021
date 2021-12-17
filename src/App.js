import React from 'react';

class App extends React.Component {
  //상태 부분
  state = {
    isLoading: true, //영화 앱 로딩 중 상태 변수
    movies: [], //영화 데이터가 저장될 배열
  }

  componentDidMount() {
    //isLoading 함수를 6초 뒤에 false 로 상태 변경, 
    //Loading... =>  We are ready 로 변경
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000 );
  }

  componentDidMount() {
    //영화 데이터 로딩!
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
