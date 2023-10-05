import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../FireBase-Config/firebase.config";
import { useState } from "react";

import { FaEye , FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";


/**
 * 
 * 1 . useState to display error msg 
 * 
 * 2. reset error 
 * 
 * 3. success msg using useState 
 * 
 * 4. password validate
 * 
 * 
 * 
 * 
 */


const Register = () => {


    const [registerError , setRegisterError] = useState('');

    const [success , setSuccess] = useState('');

    const [showPassword , setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        // console.log('submit')

        const email = e.target.email.value ;
        const password = e.target.password.value ;
        const Accepted = e.target.check.checked;

        console.log(email , password , Accepted);

        // reset error

        setRegisterError('');
        setSuccess('');


        if( password.length <6  ){
            setRegisterError('Password should be at least 6 characters')
            return;
        }

       else if (!/[A-z]/.test(password)){
            setRegisterError('password should have atleast one uppercase')
            return;

        }
        else if(!Accepted){
            setRegisterError('please accept our terms and conditions')
            return;
        }

        
        // create user 

        createUserWithEmailAndPassword(auth , email , password)
        .then(result => {
            console.log(result.user);
            if(result.user.emailVerified){
                setSuccess('user created successfully')
            }
           else{
            alert('please verify ur account ')
           }


            // send verification email

            sendEmailVerification(result.user)
            .then(()=>{
                alert('please check ur mail and verify the account')
            })
        })
        .catch(error =>{
            console.error(error);
            setRegisterError(error.message)
        })

    }
    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-8">please Register</h2>

                <form onSubmit={handleRegister}>

                    <input placeholder="Email Address" className="mb-4 w-full  px-2 py-4" type="email" name="email" id='' required />
                    <br />

                   <div className="mb-4 relative">
                   <input placeholder="Password" className=" w-full px-4 py-2" 

type={ showPassword? 'text' : "password"} 

name="password" id='' required />
<span className="absolute top-3 right-2" onClick={ ()=> setShowPassword(!showPassword) }> 

{
    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
}

 </span>
                   </div>
                    <br />

                    <div className="mb-2">
                        <input type="checkbox" name="check" id="" />
                        <label className="ml-2" htmlFor="check"> Accept our <a href=""> Terms and conditions </a> </label>
                    </div>


                    <br />

                    <input className="btn btn-primary mb-4 w-full" type="submit" name="Register" id='' />







                </form>


                {
                    registerError && <p className="text-red-700"> {registerError} </p>
                }
                {
                    success && <p className="text-green-700"> {success} </p>
                }
                <p> Already have an Account ? Please <Link to='/login'> Login </Link> </p>
            </div>
        </div>
    );
};

export default Register;