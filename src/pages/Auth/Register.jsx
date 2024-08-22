
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Config/Firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
  confirmPassword: ''
};

export default function Register() {
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = state;

    if (confirmPassword !== password) {
      toast.error("Passwords don't match");
      return;
    }
    if(confirmPassword=== password){
      navigate('/about');
      return;
    }

    setIsProcessing(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success('A new user has been successfully created');
        console.log(user);
        setState(initialState);
      })
      .catch((err) => {
        toast.error('Something went wrong while creating the user');
        console.error(err);
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  return (
    <>
      <main className='py-5 auth'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='card p-3 py-md-5'>
                <h2 className='text-center'>Register</h2>
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-12 mb-3'>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Email'
                        name='email'
                        onChange={handleChange}
                        value={state.email}
                        disabled={isProcessing}
                      />
                    </div>
                    <div className='col-12 mb-3'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                        name='password'
                        onChange={handleChange}
                        value={state.password}
                        disabled={isProcessing}
                      />
                    </div>
                    <div className='col-12 mb-3'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        onChange={handleChange}
                        value={state.confirmPassword}
                        disabled={isProcessing}
                      />
                    </div>
                    <div className='col-12 mb-3'>
                      <button
                        className='btn btn-primary w-100'
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <div className='spinner spinner-grow spinner-grow-sm'></div>
                        ) : (
                          <span>Register</span>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
