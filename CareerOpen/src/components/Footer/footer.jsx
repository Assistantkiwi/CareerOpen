import careerOpen from '../../assets/logo.svg';
import follow from '../../assets/follow.svg'

function Logo() {
    return (
      <img
       src={careerOpen} className="logo" alt="CareerOpen logo"
      />
    );
}

function Follow() {
    return (
      <img
       src={follow} className="image" alt="follow us"
      />
    );
}

const Footer = () => {
  return (
    <div style={{width: '97vw', height: '25vh', padding: '30px', margin: '80px 5px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', }}>
      <div style={{display: 'grid', justifyContent: 'space-between', gap: '15px'}}>
       <Logo />
      </div>
      <div style={{display: 'grid', justifyContent: 'space-between', gap: '15px'}}>
        
      <span className='font-medium'>Product</span>
      <span>Overview</span>
      <span>Testimonials</span>
      <span>Terms and Privacy</span>

      </div>
      <div style={{display: 'grid ', justifyContent: 'space-between', gap: '15px' }}>
        <span className='font-medium'>CareerOpen for</span>
        <span>Employers</span>
        <span>Job Seekers</span>
      </div>
      <div style={{display: 'grid ', justifyContent: 'space-between', gap: '15px'}}>
      <span className='font-medium'>Resources</span>
      <span>Community</span>
      <span>API</span>
      </div>
      <div style={{display: 'grid ', justifyContent: 'space-between', gap: '15px'}}>
        <span className='font-medium'>Company</span>
        <span>Contact Us</span>
        <span>About Us</span>
      </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '70px'}}>
        <p>@2024 CareerOpen</p>
        <Follow />
      </div>
    </div>
    
  )
}

export default Footer
