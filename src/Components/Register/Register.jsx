import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../FireBase-Config/firebase.config";
import { useState } from "react";

import { FaEye , FaEyeSlash } from 'react-icons/fa';


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
        // console.log('sibmit')

        const email = e.target.email.value ;
        const password = e.target.password.value ;
        console.log(email , password);

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

        
        // create user 

        createUserWithEmailAndPassword(auth , email , password)
        .then(result => {
            console.log(result.user);
            setSuccess('user created successfully')
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

                    <input className="btn btn-primary mb-4 w-full" type="submit" name="Register" id='' />







                </form>


                {
                    registerError && <p className="text-red-700"> {registerError} </p>
                }
                {
                    success && <p className="text-green-700"> {success} </p>
                }
            </div>
        </div>
    );
};

export default Register;