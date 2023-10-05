import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../FireBase-Config/firebase.config";
import { useState } from "react";


const Login = () => {


    const [loginError , setLoginError] = useState('');

    const [loginSuccess , setLoginSuccess] = useState('');

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

// reset error and success
        setLoginError('');
        setLoginSuccess('');

        

        signInWithEmailAndPassword(auth , email,password )
        .then(result =>{
            console.log(result.user)
            setLoginSuccess('login successfully')
        })
        .catch(error=>{
            console.error(error);
            setLoginError(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      {
        loginError && <p className="text-red-400"> {loginError} </p>
      }
      {
        loginSuccess && <p className="text-green-500"> {loginSuccess} </p>
      }
    </div>
  </div>
</div>
    );
};

export default Login;