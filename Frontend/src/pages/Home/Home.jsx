import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import './Home.css';
import { useState } from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {
  const [Category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu Category={Category} SetCategory={setCategory} /> 
      <FoodDisplay Category={Category}/>
    </div>
  );
};

export default Home;
