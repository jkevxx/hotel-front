import * as yup from "yup";

const validationSchema = {
  cardNumber: yup.string()
    .label('Card number')
    .max(16)
    .required(),
  cvc: yup.string()
    .label('CVC')
    .min(3)
    .max(4)
    .required(),
  nameOnCard: yup.string()
    .label('Name on card')
    .required(),
  expiryMonth: yup.string()
    .label('Expiry month')
    .min(2)
    .max(2)
    .required(),
  expiryYear: yup.string()
    .label('Expiry year')
    .min(4)
    .max(4)
    .required(),
};


