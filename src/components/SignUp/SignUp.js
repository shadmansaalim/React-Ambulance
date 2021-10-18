import React from 'react';
import imgSignUp from '../../images/signup.svg'
import './SignUp.css'
import useAuth from '../../hooks/useAuth'
import { useHistory } from 'react-router-dom';
import googleIcon from '../../images/googleIcon.png'

const SignUp = () => {
    const { user, setUser, setError, createAccountUsingEmail, setUserDetails, handleNameChange, handleSignUpEmailChange, handleSignUpPasswordChange, handleGoogleSignUp, handleFacebookSignUp, handleTwitterSignUp } = useAuth();

    const history = useHistory();

    const handleEmailSignUp = e => {
        e.preventDefault();
        createAccountUsingEmail()
            .then((result) => {
                setUser(result.user)
                setUserDetails();
                history.push('/home')
            })
            .catch((error) => {
                setError(error.message)
            });
    }


    const signUpUsingGoogle = () => {
        handleGoogleSignUp()
            .then(result => {
                console.log(result.user)
                history.push('/home')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const signUpUsingFacebook = () => {
        handleFacebookSignUp()
            .then(result => {
                console.log(result.user)
                history.push('/home')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const signUpUsingTwitter = () => {
        handleTwitterSignUp()
            .then(result => {
                console.log(result.user)
                history.push('/home')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <section className="vh-100 row mx-auto d-flex align-items-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600959907703-125ba1374a12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)' }}>
            <div className="col-md-8 col-lg-4 mx-auto">
                <div className="card my-5" style={{ backgroundColor: 'rgb(236, 239, 241)' }}>
                    <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                        <h4 className="card-title mt-3 text-center">Create Account</h4>
                        <p className="text-center">Get Free Emergency Ambulance Service</p>
                        <p>
                            <button onClick={signUpUsingGoogle} class="btn btn-light w-100 btn-block  btn-outline" ><img width="16px" className="img-fluid mb-1 me-2" src={googleIcon} alt="Google" />Continue With Google</button>
                            {/* <button onClick={signUpUsingGoogle} className="btn btn-block btn-light  w-100"> <i className="fab fa-google"></i>   Continue With Google</button> */}
                            <button onClick={signUpUsingFacebook} className="mt-2 btn btn-block btn-twitter w-100 text-white"> <i className="fab fa-twitter"></i>   Continue With Twitter</button>
                            <button onClick={signUpUsingTwitter} className="btn btn-block btn-facebook w-100 mt-2 text-white"> <i className="fab fa-facebook-f"></i>   Continue With Facebook</button>
                        </p>
                        <p className="divider-text">
                            <span className="bg-light rounded-circle p-2">OR</span>
                        </p>
                        <form onSubmit={handleEmailSignUp}>
                            <div className="form-group input-group mb-3">

                                <span className="input-group-text"> <i className="fa fa-user"></i> </span>

                                <input onBlur={handleNameChange} name="" className="form-control" placeholder="Full name" type="text" />
                            </div>
                            <div className="form-group input-group mb-3">

                                <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>

                                <input onBlur={handleSignUpEmailChange} name="" className="form-control" placeholder="Email address" type="email" />
                            </div>
                            <div className="form-group input-group">

                                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>

                                <input onBlur={handleSignUpPasswordChange} className="form-control" placeholder="Create password" type="password" />
                            </div>

                            <div className="form-group my-4">
                                <button type="submit" className="btn btn-dark btn-block"> Create Account  </button>
                            </div>
                            <p className="text-center">Have an account? <a href="/login">Log In</a> </p>
                        </form>
                    </article>
                </div>
            </div>
            <div className="col-lg-6">

            </div>
        </section>

    );
};

export default SignUp;