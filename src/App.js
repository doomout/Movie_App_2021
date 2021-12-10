import React from "react";

//인자를 받는다
function Food({ name, picture }) {
  return (
      <div>
        <h2>I like {name}</h2>
        <img src={picture} alt={name} />
      </div>
    );
}

const foodILike = [
  {
    id: 1,
    name: '김치',
    image: 'http://08food.com/web/product/big/201801/33_shop1_243196.jpg',
  },
  {
    id: 2,
    name: '라면',
    image: 'https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg',
  },
  {
    id: 3,
    name: '김밥',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Gimbap_%28pixabay%29.jpg/220px-Gimbap_%28pixabay%29.jpg',
  },
];



function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} />))}
    </div>
  );
}

export default App;
