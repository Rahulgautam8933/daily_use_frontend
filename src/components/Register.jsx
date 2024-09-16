import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
    confirmPassword: "" // Added for confirmation
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle registration logic here
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    // Registration logic can go here
    console.log("Registering", formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100 justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card p-4">
            <h1 className="text-center mb-4">Register</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className='mt-2' htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control mt-2"
                  id="email"
                  placeholder="Enter email"
                  name='email'
                  value={formData.email}
                  onChange={handleForm}
                  required
                />
              </div>
              <div className="form-group">
                <label className='mt-2' htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control mt-2"
                  id="password"
                  placeholder="Password"
                  name='password'
                  value={formData.password}
                  onChange={handleForm}
                  required
                />
              </div>
              <div className="form-group">
                <label className='mt-2' htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control mt-2"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleForm}
                  required
                />
              </div>
              <div className='mt-2 d-flex justify-content-center'>
                <button type="submit" className="btn btn-primary btn-block">Register</button>
              </div>
              <hr />
              <div>
                <p>Already have an account? <Link to="/login">Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
