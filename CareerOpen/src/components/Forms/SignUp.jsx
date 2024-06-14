import logo from '../../assets/logo.svg'
import googleLogo from '../../assets/Google.svg'
import groupLogo from '../../assets/Group93105.svg'
import arrowLeft from '../../assets/arrow-left.svg'

function Group() {
    return (
      <img
       src={groupLogo} className="image" alt="frame"
      />
    );
}

function Arrow() {
    return (
      <img
       src={arrowLeft} className="image" alt="frame"
      />
    );
}

function Logo() {
    return (
      <img
       src={logo} className="image" alt="frame"
      />
    );
}

function Google() {
    return (
      <img
       src={googleLogo} className="image" alt="frame"
      />
    );
}



const SignUp = () => {
  return (
    <div>
      <div className="container">
        <div className="sign-up-side">
            <div className="back">
                <Arrow /> <span>Back</span>                    
            </div>
            <div className="step-img">
               <Group className="img" /> 
            </div>
            <div className="sign-up-side-text">
                <p>One-Stop Application Tracking Hub</p>
                <p>Keep tabs on every role you applied for, all in one convenient location</p>
            </div>
            
        </div>
        <div className="sign-up-form">
            <div className="sign-up-head">
                <div className="logo">
                   <Logo /> 
                </div>
                <div className="sign-up">
                    <p>Sign Up</p>
                    <p>Activate Your Job Search Journey</p>
                </div>
                
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                          <Google /> 
                    </a>
                
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
