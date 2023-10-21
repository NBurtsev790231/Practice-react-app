import React, {useState} from 'react';
import './style.css';

function FComponent() {
  const [numbers, setNumbers] = useState([1,2,3]);

  const allNumber = () => {
    const randNumber = Math.round(Math.random() * 100);
    setNumbers([...numbers, randNumber]);
  };


  
  return (
    <div className="itemList">
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button onClick={allNumber} className="button">
        Новое число</button>
    </div>
  );
}

export default FComponent;


  

