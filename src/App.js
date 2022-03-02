import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header';

function App() {

  const [money, setMoney] = useState(100) // baslangic parasi olarak 100$ belirledik bu {money}'de ki para

  return (
   
    <>
    <Header money={money}/>
    </>

   
   
  );
}

export default App;
