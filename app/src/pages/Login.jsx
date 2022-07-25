import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='hero bg-base-200 h-91'>
      <div className='hero-content flex-col lg:flex-row-reverse w-screen'>
        <div className='card flex-shrink-0 w-full max-w-sm h-96'>
            <div className='card-body p-3'>
                <h1 className='text-2xl'>Login</h1>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Email</span>
                    </label>
                    <input type='text' placeholder='email' className='input input-bordered' />
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Password</span>
                    </label>
                    <input type='text' placeholder='password' className='input input-bordered' />
                    <label className='label'>
                        <Link to='#' className='label-text-alt link link-hover'>Forgot password?</Link>
                    </label>
                </div>
                <div className='form-control'>
                    <label>
                        <Link to='/register' className='label-text-alt link link-hover'>You don't have an account? Click here</Link>
                    </label>
                </div>
                <div className='form-control'>
                    <button className='btn btn-primary text-black bg-slate-50 border-slate-50 drop-shadow-xl'>Login</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login