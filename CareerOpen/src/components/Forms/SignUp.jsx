

const SignUp = () => {
  return (
    <div>
      <div className="container">
        <div className="sign-up-side">
            <div className="back">
                 <span>Back</span>                    
            </div>
            <div className="step-img">
                
            </div>
            <div className="sign-up-side-text">
                <p>One-Stop Application Tracking Hub</p>
                <p>Keep tabs on every role you applied for, all in one convenient location</p>
            </div>
            
        </div>
        <div className="sign-up-form">
            <div className="sign-up-head">
                <div className="logo">
                    
                </div>
                <div className="sign-up">
                    <p>Sign Up</p>
                    <p>Activate Your Job Search Journey</p>
                </div>
                <div className="btn">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        
                            <span>continue with Google</span>
                        </a>
                </div>
            </div>

            <div className="or">
                <span>Or</span>
            </div>
            <div className="form">
                <form action="" method="get">
                    <div className="name">
                        <div className="name-1">
                            <label htmlFor="first-name" >First Name</label>
                            
                            <input type="text" name="first-name" id="first-name" placeholder="Enter your First Name" />
                        </div>
                        <div className="name-2">
                            <label htmlFor="last-name">Last Name</label>
                            
                            <input type="text" name="last-name" id="last-name" placeholder="Enter your Last Name" />
                        </div>
                    </div>
                    <div className="email-address">
                        <label htmlFor="email">Email Address</label>
                        
                        <input type="text" name="email" id="email" placeholder="Enter your email address" />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        
                        <input type="password" name="password" id="password" placeholder="Enter your password" />
                    </div>
                    <div className="confirm-password">
                        <label htmlFor="confirm-password">Password</label>
                        
                        <input type="password" name="password" id="confirm-password" placeholder="Enter your password" />
                    </div>
                    <div className="form-btn">
                        <input type="button" value="Sign Up" />
                    </div>
                </form>
            </div>
            <div className="content-bottom">
                <p>Already have an account? <span>Sign In</span></p>
            <p>By clicking &quot;Sign Up above you agree to our <span>Terms of Use and Privacy Policy</span></p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignUp
