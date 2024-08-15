import React, { useState } from 'react';
import axios from 'axios';
import jsondata from './db.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayAllItems() {
  const [data, setData] = useState(jsondata.items);

  const handleUpdate = async (id) => {
    const updatedItem = data.find((item) => item.id === id);
    try {
      const response = await axios.put(`http://localhost:5000/items/${id}`, updatedItem);
      const updatedData = data.map((item) =>
        item.id === id ? response.data : item
      );
      setData(updatedData);
      alert('Item updated successfully!');
    } catch (error) {
      console.error('Error updating item:', error);
      alert('Failed to update item');
    }
  };

  const handleInputChange = (id, event) => {
    const { name, value } = event.target;
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, [name]: value } : item
    );
    setData(updatedData);
  };

  const display = data.map((e) => (
    <tr key={e.id}>
      <td>{e.id}</td>
      <td>
        <input
          className='form-control form-control-sm'
          type="text"
          name="itemName"
          value={e.itemName}
          onChange={(event) => handleInputChange(e.id, event)}
        />
      </td>
      <td>
        <input
          className='form-control form-control-sm'
          type="text"
          name="price"
          value={e.price}
          onChange={(event) => handleInputChange(e.id, event)}
        />
      </td>
      <td>
        <input
          className='form-control form-control-sm'
          type="text"
          name="description"
          value={e.description}
          onChange={(event) => handleInputChange(e.id, event)}
        />
      </td>
      <td>
        <button className="btn btn-primary btn-sm" onClick={() => handleUpdate(e.id)}>Update</button>
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
