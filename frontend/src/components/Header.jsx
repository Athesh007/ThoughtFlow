import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" p-4 shadow-md flex justify-between items-center">
      <Link to="/">
        <h1 className=" lg:text-4xl text-xl md:text-4xl font-semibold">ThoughtFlow</h1>
      </Link>
      <div className="flex justify-center items-center gap-4">
        <button className=" border-2 border-black text-sm rounded-md font-semibold px-4 py-2">
          MY POST
        </button>
        <Link to="post">
          <button className="bg-black text-md rounded-md text-white text-md font-semibold px-4 py-2">
            + POST
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
