import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(user){
        navigate('/services');
    }

    return (
        <div>
            <article className="w-100 mx-auto">
              <button 
              onClick={()=> signInWithGoogle()}
               className="bg-success opacity-75 border-0 text-white py-1 fw-bold rounded-3 w-50 mx-auto my-3 d-flex justify-content-center align-items-center">
                <img style={{height:'25px',marginRight:'5px'}} src="https://i.postimg.cc/RhBmjrmg/google.png" alt="" />
                Google Sign In
                </button>
          </article>
            
        </div>
    );
};

export default SocialLogin;