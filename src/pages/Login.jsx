import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Login() {
  const loginForm = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      username: yup.string().required('usernameRequired'),
      password: yup.string().required('passwordRequired'),
    }),
    onSubmit: () => {
      console.log('working');
    }
  })
  return (
    <div className="flex w-full h-full bg-white items-center justify-center">
      <div className='grid grid-row-3 gap-5 max-w-3xl w-full border text-xl'>
        <div >LOGO</div>
        <h1>Sign in to your account</h1>
        <form className='' onSubmit={loginForm.handleSubmit}>
          <input type="text" className="form-input" />
          <input type="password" className="form-input" />
          <button type='submit'>apply</button>
        </form>
      </div>
    </div>
  );
}

export default Login;