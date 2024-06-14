
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

const SignIn = () => {
  return (
    <div>
      <div className="container">
        <div className="sign-up-side">
            <div className="back">
                <Arrow /> <span>Back</span>     
            </div>
            <div className="step-img">
                <Group />
            </div>
            <div className="sign-up-side-text">
                <p>One-Stop Application Tracking Hub</p>
                <p>Keep tabs on every role you applied for, all in one convenient location</p>
            </div>
            
        </div>
        <div className="sign-up-form">
            <div className="back">
                <a href="">
                    <Arrow /> 
                </a>    
            </div>
            <div className="sign-up-head">
                <div className="logo">
                    <Logo />
                </div>
                <div className="sign-up">
                    <p>Sign In</p>
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
                    <div className="email-address">
                        <label htmlFor="email">Email Address</label>
                        
                        <input type="text" name="email" id="email" placeholder="Enter your email address" />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        
                        <input type="password" name="password" id="password" placeholder="Enter your password" />
                    </div>
                    <div className="form-btn">
                        <input type="button" value="Sign In" />
                    </div>
                </form>
            </div>
            <div className="content-bottom">
                <p>Create an Account here <span>Sign Up</span></p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignIn
