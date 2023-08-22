import React from 'react';
import './style.css';

export default function Test() {
  const name = 'Alex';
  const age = 18;

  function testAge() {
    if (age >= 18) {
      return (<h1>Good</h1>);
     } else {
      return (<h1>Bad!</h1>);
      }
    }

  return (
  <div>{testAge()}</div>
  );
};
