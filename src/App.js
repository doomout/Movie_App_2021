import React from 'react';

class App extends React.Component {
  //이 함수가 render() 보다 먼저 실행된다.(생성자?)
  constructor(props) {
    super(props);
    
    console.log('hello');
  }

  componentDidMount() {
    console.log('component rendered');
  }

  //반드시 클래스형 컴포넌트 안에서 소문자로 state  입력
  state ={
    count: 0,
  }
  add = () => {
    //{} 사이에 띄어쓰기를 앞뒤로 해줘야 한다
    //current에 현재 state가 넘어온다.
    this.setState(current =>  ({ 
      count: this.state.count + 1, 
    }) ); 
  }

  minus = () => {
    //current에 현재 state가 넘어온다.
    this.setState(current =>  ({ 
      count: this.state.count - 1,  //끝에 ,는 넣어도 되고 안넣어도 된다.
    }) ); 
  }

  componentDidUpdate() {
    console.log('I just updated');
  }

  componentWillUnmount() {
    console.log('Goodbye, cruel world');
  }

  //클래스 형에서는 render()이 반환 함수다.
  render() {
    console.log('render')
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;


/*
import PropTypes from 'prop-types';

//인자를 받는다
function Food({ name, picture, rating }) {
  return (
      <div>
        <h2>I like {name}</h2>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name} />
      </div>
    );
}

const foodILike = [
  {
    id: 1,
    name: '김치',
    image: 'http://08food.com/web/product/big/201801/33_shop1_243196.jpg',
    rating: 4,
  },
  {
    id: 2,
    name: '라면',
    image: 'https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg',
    rating: 3.9,
  },
  {
    id: 3,
    name: '김밥',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Gimbap_%28pixabay%29.jpg/220px-Gimbap_%28pixabay%29.jpg',
    rating: 2.7,
  },
];



function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} 
              picture={dish.image} rating={dish.rating} />))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}  
*/
