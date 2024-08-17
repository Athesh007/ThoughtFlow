const Header = () => {
  return (
    <div className=" p-4 shadow-md flex justify-between">
      <h1 className=" text-4xl font-semibold">ThoughtFlow</h1>
      <div className="flex justify-center items-center gap-4">
        <button className=" border-2 border-black text-sm rounded-md font-semibold px-4 py-2">
          MY POST
        </button>
        <button className=" bg-black text-md rounded-md text-white font-semibold px-4 py-2">
          + POST
        </button>
      </div>
    </div>
  );
};

export default Header;
