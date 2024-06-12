import section2 from  '../../assets/section2.svg';
import section3 from '../../assets/section3.svg';

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

export default function Body () {
    return (
        <div >
        <section className=" text-gray-800 w-full h-[271px] text-center ">
            <h1 className="w-[800px] h-[170px] font-bold text-6xl  leading-[84px]  ">
                Chart Your Career Journey With <span className="text-[#008552]">
                    Confidence</span></h1>
            <p className="w-[800px] leading-10 font-normal text-2xl text-[#57615E] ">
                Experience the power of AI that links you to roles aligned with your skills and ambitions, simplifying the job search process.</p>
        </section>

            <section className='flex space-x-44 space-y-28 w-full '>
                <section className='mx-20 my-14 w-[554px]'>
                <h1 className='text-[#2D3936] font-bold text-5xl leading-[63.5px] h-32' >
                    One-Stop Application Tracking Hub</h1>
                <p className='text-[#57615E] font-normal text-2xl leading-9 h-16 gap-9' >
                    Keep tabs on every role you applied for, all in one convenient location.</p>
                    <button type='button' className='w-72 h-12 my-8 gap-2.5 bg-[#008552] text-[#FFFFFF] rounded-md'>
                        Get Started</button>
                </section>
                <section className='w-72 h-52 self-center'>
                    <Image />
                </section>
            </section>

           <section className='flex bg-[#2D3936] w-full' >
            <section className='w-80 h-80 mx-14 my-14 '>
                <Image1 />
            </section>
            <section className='text-[#FFFFFF] mx-20 my-14'>
                <h1 className='font-medium text-5xl w-[554px] leading-[63.5px] h-32'>
                    Stay in Control of Your Hiring Process</h1>
                <p className='font-normal text-2xl w-[652px] h-20 gap-8'>
                    Track every stage of your job listings, from candidate applications to final evaluations, ensuring a fluid process for all</p>
                    <button type='button' className='w-72 h-12 my-14 gap-2.5 bg-[#008552] text-[#FFFFFF] rounded-md'>
                    Learn More</button>
            </section>
           </section>
           
        </div>
    )
}