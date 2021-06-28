import React, { useState, useEffect } from 'react';

export default function Test(props) {
  const [items, setItems] = useState([2, 8, 5, 3, 1]);

  const check = (a, b) => {
    if (a > b) return a;
    return b;
  };

  const order = () => {
    const list = items.sort((a, b)=> (check(a, b) === a ? 1 : -1))
    console.log(list);
  };

  useEffect(() => {
    order();
  }, []);

  return <div>Hola</div>;
}
