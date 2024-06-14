import React from 'react'

const SignUp = () => {
  return (
    <div>
      <div class="container">
        <div class="sign-up-side">
            <div class="back">
                 <span>Back</span>                    
            </div>
            <div class="step-img">
                
            </div>
            <div class="sign-up-side-text">
                <p>One-Stop Application Tracking Hub</p>
                <p>Keep tabs on every role you've applied for, all in one convenient location</p>
            </div>
            
        </div>
        <div class="sign-up-form">
            <div class="sign-up-head">
                <div class="logo">
                    
                </div>
                <div class="sign-up">
                    <p>Sign Up</p>
                    <p>Activate Your Job Search Journey</p>
                </div>
                <div class="btn">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        
                            <span>continue with Google</span>
                        </a>
                </div>
            </div>

            <div class="or">
                <span>Or</span>
            </div>
            <div class="form">
                <form action="" method="get">
                    <div class="name">
                        <div class="name-1">
                            <label for="first-name" >First Name</label>
                            
                            <input type="text" name="first-name" id="first-name" placeholder="Enter your First Name" />
                        </div>
                        <div class="name-2">
                            <label for="last-name">Last Name</label>
                            
                            <input type="text" name="last-name" id="last-name" placeholder="Enter your Last Name" />
                        </div>
                    </div>
                    <div class="email-address">
                        <label for="email">Email Address</label>
                        
                        <input type="text" name="email" id="email" placeholder="Enter your email address" />
                    </div>
                    <div class="password">
                        <label for="password">Password</label>
                        
                        <input type="password" name="password" id="password" placeholder="Enter your password" />
                    </div>
                    <div class="confirm-password">
                        <label for="confirm-password">Password</label>
                        
                        <input type="password" name="password" id="confirm-password" placeholder="Enter your password" />
                    </div>
                    <div class="form-btn">
                        <input type="button" value="Sign Up" />
                    </div>
                </form>
            </div>
            <div class="content-bottom">
                <p>Already have an account? <span>Sign In</span></p>
            <p>By clicking "Sign Up" above you agree to our <span>Terms of Use and Privacy Policy</span></p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignUp
