import React, { useState, useEffect } from 'react';
import Display from './components/Display';

export default function App(props) {
  const [items, setItems] = useState([
    { id: 1, product: 'Libro', price: 2000 },
    { id: 2, product: 'Cuaderno', price: 1000 },
    { id: 3, product: 'Lápiz', price: 500 }
  ]);
  const [form, setForm] = useState({
    id: items[items.length-1].id + 1,
    product: '',
    price: ''
  });
  const [id, setId] = useState(null);

  const createItem = () => {
    setItems([...items, form]);
  };

  const editItem = (currentId) => {
    const filtered = items.filter((item)=>item.id !== currentId)
    const edited = {...form, id: currentId}
    console.log(edited)
    setItems([...filtered, form]);
  };

  const deleteItem = (currentId) => {
    const filtered = items.filter((item)=>item.id !== currentId)
    setItems(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(id !== null){
    editItem(id)
    } else {
    createItem()
    setForm(form)
    }
  }

  const handleEdit = (currentId) => {
    const filtered = items.filter((item)=>item.id === currentId)
    setForm({...filtered[0], id: currentId })
    setId(currentId)
  }

  useEffect(()=>{
    console.log(form)
  }, [form])

  useEffect(()=>{
    console.log(id)
  }, [id])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.product}
          onChange={e => setForm({ ...form, product: e.target.value })}
        />
        <input
          type="text"
          value={form.price}
          onChange={e => setForm({ ...form, price: parseInt(e.target.value) })}
        />
        <button type="submit">{id === null ? 'Crear' : 'Modificar'}</button>
      </form>
      <br/>
      <button onClick={createItem}>Crear</button>
      {items.map(item => {
        return (
          <div key={item.id}>
            {item.id} - {item.product} - ${item.price} - 
            <span onClick={()=>handleEdit(item.id)}> edit</span> 
            <span onClick={()=>deleteItem(item.id)}> delete</span>
          </div>
        );
      })}
    </>
  );
}
