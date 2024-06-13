import section2 from  '../../assets/section2.svg';
import section3 from '../../assets/section3.svg';
import section4 from '../../assets/section4.svg'

function Image() {
    return (
      <img
       src={section2} className="image" alt="frame"
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
        <div >
        <section className=" text-gray-800 max-w-full ml-[17%] justify-center" >
            <h1 className=" w-[70%] font-bold text-6xl  leading-[84px] text-center  ">
                Chart Your Career Journey With <span className="text-[#008552]">
                    Confidence</span></h1>
            <p className="w-[70%] leading-10 font-normal text-2xl text-[#57615E] text-center ">
                Experience the power of AI that links you to roles aligned with your skills and ambitions, simplifying the job search process.</p>
        </section>

            <section className='flex space-x-44 space-y-28 max-w-full mt-10 '>
                <section className='mx-20 my-14 w-[50%]'>
                <h1 className='text-[#2D3936] font-bold text-5xl leading-[63.5px] ' >
                    One-Stop Application Tracking Hub</h1>
                <p className='text-[#57615E] font-normal text-2xl leading-9 gap-9' >
                    Keep tabs on every role you applied for, all in one convenient location.</p>
                    <button type='button' className='w-72 h-12 my-8 gap-2.5 bg-[#008552] text-[#FFFFFF] rounded-md'>
                        Get Started</button>
                </section>
                <section className='w-[35%] self-center'>
                    <Image />
                </section>
            </section>

           <section className='flex bg-[#2D3936] max-w-full' >
            <section className='w-[25%]  mx-14 my-14 '>
                <Image1 />
            </section>
            <section className='text-[#FFFFFF] w-[50%] mx-20 my-14'>
                <h1 className='font-medium text-5xl  leading-[63.5px] '>
                    Stay in Control of Your Hiring Process</h1>
                <p className='font-normal text-xl gap-8 mt-7'>
                    Track every stage of your job listings, from candidate applications to final evaluations, ensuring a fluid process for all</p>
                    <button type='button' className='w-72 h-12 my-7 gap-2.5 bg-[#008552] text-[#FFFFFF] rounded-md'>
                    Learn More</button>
            </section>
           </section>

           <section className='flex max-w-full justify-between mt-10 mx-20 my-14'>
            <section className='w-[50%]'>
                <h1 className='font-medium leading-[63.5px] text-5xl text-[#008552]'>Discover Top Candidates Tailored to Your Needs</h1>
                <p className='font-normal text-xl text-[#57615E] gap-8 mt-7'>User-friendly tools to attract, evaluate, and hire top candidates.</p>
                <button type='button' className='w-72 h-12 my-7 gap-2.5 bg-[#008552] text-[#FFFFFF] rounded-md'>
                    Post Job</button>
            </section>
            <section className='w-[30%]'>
                <Image2 />
            </section>
           </section>
        </div>
    )
}