import React from 'react';
import './index.css';
import Futures from './Futures';
import Spot from './Spot';


const favourite="spot";

const FavS = () =>{
  if(favourite === "spot")
  {
    return <Futures/>;
      
  } else
  {
    return <Spot/>;
  }
};

const App =() => (
  <>
  <h1 className="heading_style">important companies</h1>
  <FavS/>
  
 </>
);

export default App;