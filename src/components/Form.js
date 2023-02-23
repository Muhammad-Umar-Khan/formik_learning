import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  address: Yup.object({
    street: Yup.string().required("Required"),
    suite: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
  }),
});

const Form = () => {
  return (
    <form>
      <label>
        <input />
      </label>
      <input />
      <input />
      <input />
      <button>Submit</button>
    </form>
  );
};

export default Form;
