import { Link } from "react-router-dom"

const Buttons = () => {
  return (
 
<div className=" flex">

    <div>
     <Link to="/Signin" className='w-28 h-12 p-5 m-5 border-2 border-[#008552] bg-transparent mr-2 text-[#008552]'>
        Sign In</Link>
     <Link to="/SignUp" className='w-28 h-12 p-5 m-5 text-white bg-[#008552]'
        >Sign Up</Link>
              </div>
    </div>


  )
}

export default Buttons


