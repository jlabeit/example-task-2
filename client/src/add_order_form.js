import React from 'react'
import { Formik } from 'formik'


const AddOrderForm = ({ onAddOrder }) => {
  return (
    <Formik
      onSubmit={onAddOrder}
      initialValues={{
        start: new Date().toISOString(),
        duration: 60*8,
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="datetime-local"
            name="start"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.start}
          />
          <input
            type="number"
            name="duration"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.duration}
          />
          <button type="submit">
            Add order
          </button>
        </form>
      )}
    </Formik>)
}

export default AddOrderForm