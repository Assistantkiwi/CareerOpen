import { Link } from "react-router-dom";
import "./Buttons.css";

const Buttons = () => {
  return (
    <div className="flex">
      <div className="button">
        <Link
          to="../signin"
          className="w-28 h-12 p-4 m-5 border-2 border-[#008552] bg-transparent mr-2 text-[#008552] rounded-md"
        >
          Sign In
        </Link>
        <Link
          to="../signup"
          className="w-28 h-12 p-4 m-5 text-white border-2 border-transparent bg-[#008552] rounded-md"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Buttons;
