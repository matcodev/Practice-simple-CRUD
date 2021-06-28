import React, { useState } from 'react';

export default function Display(props) {

  const [classColor, setClassColor] = useState('');

  return (
    <>
      <div className="d-flex justify-content-center my-3">
        <button
          className="btn btn-primary me-2"
          onClick={() => setClassColor('primary')}
        >
          Primary
        </button>
        <button
          className="btn btn-success me-2"
          onClick={() => setClassColor('success')}
        >
          Success
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setClassColor('danger')}
        >
          Danger
        </button>
      </div>
      <table className={`table table-${classColor}`}>
        {' '}
        {/* "table " */}
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Producto</th>
            <th scope="col">precio</th>
          </tr>
        </thead>
        <tbody>
          {props.elements.map((element) => {

            return (
              <tr key={element.id}>
                <th scope="row">{element.id}</th>
                <td>{element.product}</td>
                <td>{element.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-center my-3">
        <button className="btn btn-dark" onClick={props.onMouse}>
          Calcular
        </button>
      </div>
    </>
  );
}
