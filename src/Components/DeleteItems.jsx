import React, { useState } from 'react';
import jsondata from './db.json';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayAllItems() {
  const [data, setData] = useState(jsondata.items);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/items/${id}`);
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
      alert('Item deleted successfully!');
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Failed to delete item');
    }
  };

  const display = data.map((e) => (
    <tr key={e.id}>
      <td>{e.id}</td>
      <td>{e.itemName}</td>
      <td>{e.price}</td>
      <td>{e.description}</td>
      <td>
        <button className="btn btn-danger" onClick={() => handleDelete(e.id)}>Delete</button>
      </td>
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
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{display}</tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplayAllItems;
