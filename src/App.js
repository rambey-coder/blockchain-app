import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false')
    .then(res => setCards(res.data))
    .catch(err => alert(err.data))
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='max-w-[1240px] mx-auto px-4 py-20 flex items-center justify-between flex-wrap w-[90%] gap-7'>
      {
        cards.map(card => {
          return(
            <Card 
            name={card.name}
            image={card.image}
            symbol={card.symbol}
            price={card.current_price}
            priceChange={card.price_change_percentage_24h}
            />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
