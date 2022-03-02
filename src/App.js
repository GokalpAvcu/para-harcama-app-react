import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header';
import Product from './components/Product'
import Basket from './components/Basket'
import products from './product.json'

function App() {

  const [money, setMoney] = useState(1000000); // baslangic parasi olarak 100$ belirledik bu {money}'de ki para
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0)

  const resetBasket = () => {
    setBasket([])
  }

 useEffect (() => {
  setTotal(basket.reduce((acc, item) => {
    return acc + (item.amount * (products.find(product => product.id === item.id).price))
  }, 0),
  )
  }, [basket])


  return (
   
    <>
    <Header total={total} money={money}/> 
    <div className='container products'>
    {products.map(product => (

       <Product key={product.id} money={money} basket={basket} setBasket={setBasket} total={total} product={product}/>
))}
    </div>
    {total > 0 && (
    <Basket resetBasket={resetBasket} products={products} total={total} basket={basket} />
   )}
    </>

   
   
  );
}

export default App;
