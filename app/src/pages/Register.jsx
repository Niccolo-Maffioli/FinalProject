import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='hero bg-base-200 h-91'>
      <div className='hero-content flex-col lg:flex-row-reverse w-screen'>
        <div className='card flex-shrink-0 w-full max-w-sm h-vh80'>
            <div className='card-body p-2 h-91'>
                <h1 className='text-2xl'>Register</h1>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>First Name</span>
                    </label>
                    <input type='text' placeholder='first name' className='input input-bordered' />
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Second Name</span>
                    </label>
                    <input type='text' placeholder='second name' className='input input-bordered' />
                </div>
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
                        <Link to='/login' className='label-text-alt link link-hover'>You already have an account? Click here</Link>
                    </label>
                </div>
                <div className='form-control'>
                    <button className='btn btn-primary text-black bg-slate-50 border-slate-50 drop-shadow-xl'>Register</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register