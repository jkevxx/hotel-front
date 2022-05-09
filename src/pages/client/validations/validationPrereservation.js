import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required'),
  lastName: yup
    .string()
    .required('Last Name is required'),
  cellphone: yup
    .string()
    .min(10, "Cellphone must be at least 10 numbers")
    .max(10, "Cellphone must be at least 10 numbers")
    .typeError('It must be at least 10 numbers')
    .required('Cellphone is required'),
  email: yup
    .string()
    .email("Incorrect format")
    .required('Email is required'),
  checkin: yup
    .string()
    .typeError("Format date invalid")
    .required('Date is required'),
  checkout: yup
    .string()
    .typeError("Format date invalid")
    .required('Date is required'),
  numRooms: yup
    .number()
    .required("Number is required")
    .typeError("It must be a number")
    .positive()
    .integer(),
  totalPayment: yup
    .number()
    .required("Number is required")
    .typeError("It must be a number")
    .positive(),
  PaymentMethodId: yup
    .number()
    .required("Number is required")
    .typeError("It must be a number")
    .positive()
    .integer(),
  cardNumber: yup
    .string()
    .label('Card number')
    .max(16)
    .required(),
  nameOnCard: yup
    .string()
    .label('Name on card')
    .required(),
  expDate: yup
    .string()
    .typeError("Format date invalid")
    .required('Date is required'),
  cvc: yup
    .string()
    .label('CVC')
    .min(3)
    .max(4)
    .required(),
});

export default schema;