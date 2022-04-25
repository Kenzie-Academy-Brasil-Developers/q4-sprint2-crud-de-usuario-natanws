import * as yup from 'yup';
import { hashSync } from 'bcrypt'
import { v4 } from 'uuid';

const createUserShape = yup.object().shape({
  uuid: yup.string().default(() => v4()).transform(() => v4()),
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().transform((password) => hashSync(password, 10)),
  isAdm: yup.boolean().default(() => false),
  createdOn: yup.date().default(() => new Date()),
  updatedOn: yup.date().default(() => new Date()),
})

export { createUserShape }