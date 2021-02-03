import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [actors, setactors] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
    const items = await data.json();
    const actors = items.data
    console.log(actors);
  }

  return (
    <div className="App">
      {actors.map(item => (
        <h1>{item.name}</h1>
      ))}
    </div>
  );
}

export default Shop;
