import React from 'react';
import axios from 'axios';
import Movie from './Movie';

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
    const {  //movies.data.data.movies를 구조 분해 할당 방식으로 변경 이게 더 헷깔리는데?
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');  //await : axios.get()는 작업이 끝날때까지 기다려 달라고 선언, 평점 정렬 부분 추가 
    //state에 있는 변수 : 구조 분해 할당의 변수 
    // this.setState({ movies: movies }); 
    
    //state에 있는 변수 : 구조 분해 할당의 변수 이름이 같다면 축약할 수 있다.
    //로딩중 상태를 바꾸기 위해 isLoading: false로 변경
    this.setState({ movies, isLoading: false });
  }

  //render()는 로딩중으로 표시 되는 동안 비동기 함수인 getMovies() 실행
  componentDidMount() {
    this.getMovies();
  }

  //클래스 형에서는 render()이 반환 함수다.
  render() {
    //로딩중 상태
    const { isLoading, movies } = this.state;

    //로딩 중 or movies데이터 출력 (삼항 연산자)
    return (<section class='container'>
      {isLoading ? (
        <div class='loader'>
          <span class="loader__text">Loading...</span>
        </div>
        ) : (
          <div class="movies">
          {movies.map(movies => (
            <Movie
              key={movies.id} //key props는 유일해야 하므로 id를 활용
              id={movies.id}
              year={movies.year}
              title={movies.title}
              summary={movies.summary}
              poster={movies.medium_cover_image} //이미지 URL
            /> //Movie 컴포넌트 출력
          ))}
      </div>
      )}
      </section>
    );
  }
}

export default App;
