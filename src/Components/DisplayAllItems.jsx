import React from 'react';
import jsondata from './db.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayAllItems() {
  const displaydata = jsondata.items.map((e) => (
    <tr key={e.id}>
      <td>{e.id}</td>
      <td>{e.itemName}</td>
      <td>{e.price}</td>
      <td>{e.description}</td>
    </tr>
  ));

  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {displaydata}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplayAllItems;
