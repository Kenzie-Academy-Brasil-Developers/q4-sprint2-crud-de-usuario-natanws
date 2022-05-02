import * as yup from "yup"

const updateUserShape = yup.object().shape({
  name: yup.string().optional(),
  email: yup.string().email().lowercase().optional(),
  password: yup.string().optional(),
  isAdm: yup.boolean().optional()
});

export default updateUserShape;
