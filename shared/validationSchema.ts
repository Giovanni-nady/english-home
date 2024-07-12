// shared/validationSchema.ts
import * as Yup from 'yup'

// Login validation schema
export const loginValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Enter a valid email')
    .max(50, 'Email cannot exceed 50 characters')
    .required('Email is required'),
  password: Yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password cannot exceed 20 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:;"'|\\<>?,./]).{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
    .required('Password is required')
})

// Signup validation schema
export const signupValidationSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),
  email: Yup
    .string()
    .email('Enter a valid email')
    .max(50, 'Email cannot exceed 50 characters')
    .required('Email is required'),
  password: Yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password cannot exceed 20 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:;"'|\\<>?,./]).{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
    .required('Password is required'),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required')
})
