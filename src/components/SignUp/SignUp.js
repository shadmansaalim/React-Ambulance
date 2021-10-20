import React from 'react';
import './SignUp.css'
import useAuth from '../../hooks/useAuth'
import { useHistory } from 'react-router-dom';
import googleIcon from '../../images/googleIcon.png'
import swal from 'sweetalert';


const SignUp = () => {
    const { user, name, setUser, error, setError, createAccountUsingEmail, setUserDetails, handleNameChange, handleSignUpEmailChange, handleSignUpPasswordChange, handleGoogleSignUp, handleFacebookSignUp, handleTwitterSignUp, setIsLoading } = useAuth();

    const history = useHistory();



    const handleEmailSignUp = e => {
        e.preventDefault();
        createAccountUsingEmail()
            .then((result) => {
                setUser(result.user)
                setUserDetails();
                swal("Account Created Successfully!", `Thank You ${name} for being with us.`, "success");
                history.push('/home')
            })
            .catch((error) => {
                console.log(error.message)
                if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
                    setError('An account already exists with this email')
                }

            });
    }


    const signUpUsingGoogle = () => {
        setIsLoading(true);
        handleGoogleSignUp()
            .then(result => {
                console.log(result.user)
                swal("Account Created Successfully!", `Thank You ${result.user.displayName} for being with us.`, "success");
                history.push('/home')
            })
            .catch(error => {
                console.log(error.message)
                if (error.message == 'Firebase: Error (auth/account-exists-with-different-credential).') {
                    setError('You already have an account with same credentials. Please try logging with that')
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    }
    const signUpUsingFacebook = () => {
        setIsLoading(true);
        handleFacebookSignUp()
            .then(result => {
                console.log(result.user)
                swal("Account Created Successfully!", `Thank You ${result.user.displayName} for being with us.`, "success");
                history.push('/home')
            })
            .catch(error => {
                console.log(error.message)
                if (error.message == 'Firebase: Error (auth/account-exists-with-different-credential).') {
                    setError('You already have an account with same credentials. Please try logging with that')
                }
            })
            .finally(() => {

                setIsLoading(false);
            });
    }
    const signUpUsingTwitter = () => {
        setIsLoading(true);
        handleTwitterSignUp()
            .then(result => {
                console.log(result.user)
                swal("Account Created Successfully!", `Thank You ${result.user.displayName} for being with us.`, "success");
                history.push('/home')
            })
            .catch(error => {
                if (error.message == 'Firebase: Error (auth/account-exists-with-different-credential).') {
                    setError('You already have an account with same credentials. Please try logging with that')
                }
            })
            .finally(() => {
                console.log(error.message)
                setIsLoading(false);
            });
    }

    return (
        <section className="vh-100 row mx-auto d-flex align-items-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600959907703-125ba1374a12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)' }}>
            <div className="col-md-8 col-lg-4 mx-auto">
                <div className="card my-5" style={{ backgroundColor: 'rgb(236, 239, 241)' }}>
                    <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                        <p className="text-danger text-center">{error}</p>
                        <h4 className="card-title mt-3 text-center">Create Account</h4>
                        <p className="text-center">Get Free Emergency Ambulance Service</p>
                        <p>
                            <button onClick={signUpUsingGoogle} class="btn btn-light w-100 btn-block  btn-outline" ><img width="16px" className="img-fluid mb-1 me-2" src={googleIcon} alt="Google" />Continue With Google</button>
                            <button onClick={signUpUsingTwitter} className="mt-2 btn btn-block btn-twitter w-100 text-white"> <i className="fab fa-twitter"></i>   Continue With Twitter</button>
                            <button onClick={signUpUsingFacebook} className="btn btn-block btn-facebook w-100 mt-2 text-white"> <i className="fab fa-facebook-f"></i>   Continue With Facebook</button>
                        </p>
                        <p className="divider-text">
                            <span className="bg-light rounded-circle p-2">OR</span>
                        </p>
                        <form onSubmit={handleEmailSignUp}>
                            <div className="form-group input-group mb-3">

                                <span className="input-group-text"> <i className="fa fa-user"></i> </span>

                                <input onBlur={handleNameChange} name="" className="form-control" placeholder="Full name" type="text" required />
                            </div>
                            <div className="form-group input-group mb-3">

                                <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>

                                <input onBlur={handleSignUpEmailChange} name="" className="form-control" placeholder="Email address" type="email" required />
                            </div>
                            <div className="form-group input-group">

                                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>

                                <input onBlur={handleSignUpPasswordChange} className="form-control" placeholder="Create password" type="password" required />
                            </div>

                            <div className="form-group my-4 text-center">
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