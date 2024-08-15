import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const AddItemForm = () => {
const baseURL = process.env.REACT_APP_BASE_URL;
  
  const validationSchema = Yup.object({
    itemName: Yup.string()
      .min(3, 'Item name must be at least 3 characters')
      .required('Item name is required'),
    price: Yup.number()
      .positive('Price must be a positive number')
      .required('Price is required'),
    description: Yup.string()
      .min(10, 'Description must be at least 10 characters')
      .required('Description is required'),
  });
  const formik = useFormik({
    initialValues: {
      itemName: '',
      price: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post(`${baseURL}/items`, values);
        alert('Item added successfully!');
        resetForm();
      } catch (error) {
        console.error('Error adding item:', error);
        alert('Failed to add item');
      }
    },
  });

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 col-lg-6 mx-auto">
          <h2 className="mb-4">Add New Item</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="itemName" className="form-label">Item Name</label>
              <input
                type="text"
                className={`form-control ${formik.touched.itemName && formik.errors.itemName ? 'is-invalid' : ''}`}
                id="itemName"
                {...formik.getFieldProps('itemName')}
              />
              {formik.touched.itemName && formik.errors.itemName ? (
                <div className="invalid-feedback">{formik.errors.itemName}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input
                type="number"
                className={`form-control ${formik.touched.price && formik.errors.price ? 'is-invalid' : ''}`}
                id="price"
                {...formik.getFieldProps('price')}
              />
              {formik.touched.price && formik.errors.price ? (
                <div className="invalid-feedback">{formik.errors.price}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className={`form-control ${formik.touched.description && formik.errors.description ? 'is-invalid' : ''}`}
                id="description"
                rows="3"
                {...formik.getFieldProps('description')}
              ></textarea>
              {formik.touched.description && formik.errors.description ? (
                <div className="invalid-feedback">{formik.errors.description}</div>
              ) : null}
            </div>
            <button type="submit" className="btn btn-primary">Add Item</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItemForm;
