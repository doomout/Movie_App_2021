import React from 'react';
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

export default App;
