import careerOpen from "../../assets/logo.svg";
import follow from "../../assets/follow.svg";

function Logo() {
  return <img src={careerOpen} className="logo" alt="CareerOpen logo" />;
}

function Follow() {
  return <img src={follow} className="image" alt="follow us" />;
}

const Footer = () => {
  return (
    <div className="w-[97vw] h[25vh] p-7 my-20 mx-2">
      <div className="flex justify-between">
        <div className="grid justify-between gap-3.5">
          <Logo />
        </div>
        <div className="grid justify-between gap-3.5">
          <span className="font-semibold">Product</span>
          <span>Overview</span>
          <span>Testimonials</span>
          <span>Terms and Privacy</span>
        </div>
        <div className="grid justify-between gap-3.5">
          <span className="font-semibold">CareerOpen for</span>
          <span>Employers</span>
          <span>Job Seekers</span>
        </div>
        <div className="grid justify-between gap-3.5">
          <span className="font-semibold">Resources</span>
          <span>Community</span>
          <span>API</span>
        </div>
        <div className="grid justify-between gap-3.5">
          <span className="font-semibold">Company</span>
          <span>Contact Us</span>
          <span>About Us</span>
        </div>
      </div>
      <div className="flex justify-between mt-16">
        <p>@2024 CareerOpen</p>
        <Follow />
      </div>
    </div>
  );
};

export default Footer;
