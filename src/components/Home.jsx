import React, { useState } from 'react'

const Home = () => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100 justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card p-4">
            <h1 className="text-center mb-4">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className='mt-2' htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control mt-2"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className='mt-2 d-flex justify-content-center'>

              <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </div>
              <hr />
              <div>
                <p>if there has no Account then Register</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Home
