import React from 'react';
import useAuth from '../../hooks/useAuth'
import { useHistory, useLocation } from 'react-router-dom';
import googleIcon from '../../images/googleIcon.png'
import swal from 'sweetalert';


const Login = () => {
    const { setError, handleLoginEmailChange, handleLoginPasswordChange, handleGoogleSignUp, handleFacebookSignUp, handleTwitterSignUp, handleLogin, setIsLoading, error } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirectURL = location.state?.from || '/home';




    const signUpUsingGoogle = () => {
        setIsLoading(true);
        handleGoogleSignUp()
            .then(result => {

                console.log(result.user)
                swal(`Welcome Back ${result.user.displayName.substr(0, result.user.displayName.indexOf(' '))}`, "Enjoy Our Ambulance Services.", "success");
                history.push(redirectURL)
            })
            .catch(error => {
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
                swal(`Welcome Back ${result.user.displayName.substr(0, result.user.displayName.indexOf(' '))}`, "Enjoy Our Ambulance Services.", "success");
                history.push(redirectURL)
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
                swal(`Welcome Back ${result.user.displayName.substr(0, result.user.displayName.indexOf(' '))}`, "Enjoy Our Ambulance Services.", "success");
                history.push(redirectURL)
            })
            .catch(error => {
                if (error.message == 'Firebase: Error (auth/account-exists-with-different-credential).') {
                    setError('You already have an account with same credentials. Please try logging with that')
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    }


    const loginSubmission = (e) => {
        e.preventDefault();
        handleLogin()
            .then(result => {
                swal(`Welcome Back ${result.user.displayName.substr(0, result.user.displayName.indexOf(' '))}`, "Enjoy Our Ambulance Services.", "success");
                history.push(redirectURL);
            })
            .catch(error => {
                console.log(error.message)
                if (error.message == 'Firebase: Error (auth/wrong-password).') {
                    setError('Invalid Password! Please Try Again')
                }
                else if (error.message == 'Firebase: Error (auth/user-not-found).') {
                    setError('User Not Found! Please create an account')
                }


            })

    }

    return (
        <section className="vh-100 row mx-auto d-flex align-items-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600959907703-125ba1374a12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)' }}>

            <div className="col-lg-6">

            </div>
            <div className="col-md-8 col-lg-4 mx-auto">
                <div className="card my-5" style={{ backgroundColor: 'rgb(236, 239, 241)' }}>
                    <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                        <p className="text-danger text-center">{error}</p>
                        <h4 className="card-title mt-3 text-center">Welcome Back</h4>
                        <p className="text-center">Get Free Emergency Ambulance Service</p>
                        <p>
                            <button onClick={signUpUsingGoogle} class="btn btn-light w-100 btn-block  btn-outline" ><img width="16px" className="img-fluid mb-1 me-2" src={googleIcon} alt="Google" />Login With Google</button>
                            {/* <button onClick={signUpUsingGoogle} className="btn btn-block btn-light  w-100"> <i className="fab fa-google"></i>   Continue With Google</button> */}
                            <button onClick={signUpUsingTwitter} className="mt-2 btn btn-block btn-twitter w-100 text-white"> <i className="fab fa-twitter"></i>   Login With Twitter</button>
                            <button onClick={signUpUsingFacebook} className="btn btn-block btn-facebook w-100 mt-2 text-white"> <i className="fab fa-facebook-f"></i>   Login With Facebook</button>
                        </p>
                        <p className="divider-text">
                            <span className="bg-light rounded-circle p-2">OR</span>
                        </p>
                        <form onSubmit={loginSubmission}>
                            <div className="form-group input-group mb-2">

                                <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>

                                <input onBlur={handleLoginEmailChange} name="" className="form-control" placeholder="Email address" type="email" required />
                            </div>
                            <div className="form-group input-group">

                                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>

                                <input onBlur={handleLoginPasswordChange} className="form-control" placeholder="Password" type="password" required />
                            </div>

                            <div className="form-group my-4 text-center">
                                <button type="submit" className="btn btn-outline-dark btn-block">Login</button>
                            </div>
                            <p className="text-center">Doesn't have an account ? <a href="/sign-up">Sign Up</a> </p>
                        </form>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Login;