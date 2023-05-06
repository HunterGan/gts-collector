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
    onSubmit: (values) => {
      console.log('working', values);
    }
  })
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-lg">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Войти в панель управления
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={loginForm.handleSubmit}>
          <div>
            <label for="username" className="block text-sm font-medium leading-6 text-gray-900">Имя пользователя</label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autocomplete="username"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={loginForm.handleChange} value={loginForm.values.username} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
              <div className="text-sm">
                <a href="#p" className="font-semibold text-indigo-600 hover:text-indigo-500">Забыли пароль?</a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={loginForm.handleChange}
                value={loginForm.values.password} />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Войти
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          <a href="#p" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Связаться с администратором</a>
        </p>
      </div>
    </div>
  );
}

export default Login;