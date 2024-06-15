import section2 from  '../../assets/section2.svg';
import section3 from '../../assets/section3.svg';
import section4 from '../../assets/section4.svg';
import filter from '../../assets/filter.svg';

function Image() {
    return (
      <img
       src={section2} className="image" alt="frame"
      />
    );
}

function Filter() {
    return (
      <img
       src={filter} className="image" alt="frame"
      />
    );
}



function Image1 () {
    return (
        <img
       src={section3} className="image1" alt="frame"
      />
    );
}

function Image2 () {
    return (
        <img
       src={section4} className="image2" alt="frame"
      />
    );
}

export default function Body () {
    return (
        <div className='min-w-96  md:max-w-screen-2xl'>
        <div className='text-gray-800 mx-5 justify-center items-center md:px-16 md:py-10 md:mx-36 md:leading-[84px]'  >
            <h1 className='font-bold text-4xl text-center md:text-6xl md:mx-20 md:leading-[84px]' >
                Chart Your Career Journey With <span className="text-[#008552]">
                    Confidence</span></h1>
            <p className='font-normal text-xl text-center md:mt-4 md:text-2xl '>
                Experience the power of AI that links you to roles aligned with your skills and ambitions, simplifying the job search process.</p>
        </div>

        <div className='md:max-w-screen-2xl' >
        <div className='py-5 px-9 m-2'>
        <Filter />
        </div>
        </div> 
            <div className='mt-20 mx-5 md:flex md:shrink-0 md:space-x-44 md:space-y-28 md:px-20'>
                <div>
                <h1 className='text-[#2D3936] font-bold text-4xl text-left md:text-5xl '>
                    One-Stop Application Tracking Hub</h1>
                <p className='text-[#57615E] font-normal text-xl text-left mt-10 md:text-2xl'>
                    Keep tabs on every role you applied for, all in one convenient location.</p>
                    <button type='button' className='bg-[#008552] text-[#FFFFFF] mt-10 py-4 px-36 rounded-md'>
                        Get Started</button>
                </div>
                <div className='mt-10 md:self-center'>
                    <Image />
                </div>
            </div>

           <div className='bg-[#2D3936] mt-20 px-4 py-6 md:flex md:shrink-0' >
            <div className='md:mx-14 md:my-14'>
                <Image1 />
            </div>
            <div className='text-[#FFFFFF] md:mx-14 md:my-14' >
                <h1 className='font-medium text-2xl mt-5 md:text-5xl ' >
                    Stay in Control of Your Hiring Process</h1>
                <p className='font-normal text-light mt-5 md:gap-8 md:text-xl' >
                    Track every stage of your job listings, from candidate applications to final evaluations, ensuring a fluid process for all</p>
                    <button type='button' className='bg-[#008552] text-[#FFFFFF] mt-8 py-4 px-36 rounded-md' >
                    Learn More</button>
            </div>
           </div>

           <div className='mt-10 mx-6 px-3 py-3 md:flex md:shrink-0 md:mx-20 md:my-14 ' >
            <div className='md:mx-14 md:my-14'>
                <h1 className=' text-[#008552] font-semibold text-3xl text-left md:font-medium md:text-5xl md:leading-[63.5px]' >
                Discover Top Candidates Tailored to Your Needs</h1>
                <p className='font-medium mt-8 text-light text-[#57615E] text-left md:gap-8'>
                    User-friendly tools to attract, evaluate, and hire top candidates.</p>
                <button type='button' className='bg-[#008552] text-[#FFFFFF] mt-8 py-4 px-32 rounded-md'>
                    Post Job</button> 
            </div>
            <div className='mt-10 mb-5 md:mx-20 md:my14 ' >
                <Image2 />
            </div>
           </div>

           <div className='mt-10 mx-6 px-4 py-4 rounded-md bg-gradient-to-r from-[#0A8B8B] to-[#008552] ...'>
            <div className=''>
                <h1 className='text-[#FFFFFF] font-medium text-2xl text-center md:text-4xl md:pt-9 md:leading-[63.5px]' >Newsletter</h1>
                <p className='text-[#E6F3EE] font-light text-center mt-2 md:text-base' >Get Jobs listing updates everyday</p>
            </div>
            <div className='py-5 md:mx-96 '>
                <form  action="">
                <div className='' >
               <label className='font-normal text-[#FFFFFF] text-base text-center'  htmlFor='email' >Email Address</label>
            <input type="email" name="email" id="email" placeholder='Enter your email address' className='block px-10 py-2 border-2 border-[#E6F3EE] bg-transparent  rounded-md md:px-16 ' /> 
             </div>
             <div >
                <button className='text-[#008552] bg-white mt-8  px-24 py-4 rounded-md md:py-3 md:px-32'>Subscribe</button>
             </div>
                </form>
            
            </div>
           </div>
           
        </div>
    )
}