import * as Yup from "yup";
import { Formik, Form } from "formik";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  address: Yup.object({
    street: Yup.string().required("Required"),
    suite: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
  }),
});

const initialValues = {
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
  },
};

const AddUser = () => {
  return (
    <div className="register-form">
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm({ values: "" });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          setFieldTouched,
          values,
          errors,
        }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <input
                type="text"
                label="Name"
                onChange={handleChange("name")}
                onBlur={() => setFieldTouched("name")}
                value={values.name}
              />
              {errors.name && touched.name && <p>{errors.name}</p>}
              <input
                type="text"
                label="Username"
                onChange={handleChange("username")}
                onBlur={() => setFieldTouched("username")}
                value={values.username}
              />
              {errors.username && touched.username && <p>{errors.username}</p>}
              <input
                type="email"
                label="Email"
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && touched.email && <p>{errors.email}</p>}
              <input
                type="text"
                label="Street"
                onChange={handleChange("address.street")}
                onBlur={() => setFieldTouched("address.street")}
                value={values?.address?.street}
              />
              {errors?.address?.street && touched?.address?.street && (
                <p>{errors?.address?.street}</p>
              )}
              <input
                type="text"
                label="Suite"
                onChange={handleChange("address.suite")}
                onBlur={() => setFieldTouched("address.suite")}
                value={values?.address?.suite}
              />
              {errors?.address?.suite && touched?.address?.suite && (
                <p>{errors?.address?.suite}</p>
              )}
              <input
                type="text"
                label="City"
                onChange={handleChange("address.city")}
                onBlur={() => setFieldTouched("address.city")}
                value={values?.address?.city}
              />
              {errors?.address?.city && touched?.address?.city && (
                <p>{errors?.address?.city}</p>
              )}
              <button type="submit">Register</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddUser;
