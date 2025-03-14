import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Checkout = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      address: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Order placed:", values);
      navigate("/confirmation");
    },
  });

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={formik.handleSubmit}>
        <input type="text" name="name" placeholder="Name" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

        <input type="email" name="email" placeholder="Email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <input type="text" name="address" placeholder="Address" {...formik.getFieldProps("address")} />
        {formik.touched.address && formik.errors.address ? <div>{formik.errors.address}</div> : null}

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Checkout;
