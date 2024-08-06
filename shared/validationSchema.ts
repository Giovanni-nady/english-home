// shared/validationSchema.ts
import * as Yup from 'yup'

// Login validation schema
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().trim()
    .email('Enter a valid email')
    .max(50, 'Email cannot exceed 50 characters')
    .required('Email is required'),
  password: Yup.string().trim()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password cannot exceed 20 characters')
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:;"'|\\<>?,./]).{8,}$/,
    //   'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    // )
    .required('Password is required')
})

// Signup validation schema
export const signUpValidationSchema = Yup.object().shape({
  first_name: Yup.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(15, 'Name cannot exceed 50 characters')
    .required('First Name is required'),
  last_name: Yup.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(15, 'Name cannot exceed 50 characters')
    .required('Last Name is required'),
  email: Yup.string()
    .trim()
    .email('Enter a valid email')
    .max(50, 'Email cannot exceed 50 characters')
    .required('Email is required'),
  password: Yup.string()
    .trim()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password cannot exceed 20 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:;"'|\\<>?,./]).{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
  phone: Yup.string()
    .trim()
    .matches(/^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/, 'Please enter a valid Phone number')
    .required('Phone number is required'),
  address: Yup.string()
    .trim()
    .min(5, 'Address must be at least 5 characters')
    .max(100, 'Address cannot exceed 100 characters')
    .required('Address is required'),
  governorate_id: Yup.string().trim().required('Governorate is required')

})

// edit personal data
export const editValidationSchema = Yup.object().shape({
  first_name: Yup.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(15, 'Name cannot exceed 50 characters')
    .required('First Name is required'),
  last_name: Yup.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(15, 'Name cannot exceed 50 characters')
    .required('Last Name is required'),
  email: Yup.string()
    .trim()
    .email('Enter a valid email')
    .max(50, 'Email cannot exceed 50 characters')
    .required('Email is required'),
  phone: Yup.string()
    .trim()
    .matches(/^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/, 'Please enter a valid Phone number')
    .required('Phone number is required'),
  address: Yup.string()
    .trim()
    .min(5, 'Address must be at least 5 characters')
    .max(100, 'Address cannot exceed 100 characters')
    .required('Address is required'),
  governorate_id: Yup.string().trim().required('Governorate is required')

})

// Change Password validation schema
export const ChangePasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .trim()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password cannot exceed 20 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:;"'|\\<>?,./]).{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
})
