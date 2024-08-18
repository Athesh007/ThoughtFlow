import gl from "../assets/gl.jpg";

const PostList = ({ toggle, setToggle, details }) => {
  const [{ title, description, author }] = details;

  return (
    <div className="w-full border-grey-300 border-2 shadow-lg rounded-lg p-6">
      <div>
        <img src={gl} className="rounded-md" />
      </div>
      <div>
        <div className="pt-4 font-semibold text-2xl">
          <h1>{title}</h1>
        </div>
        <div className="pb-4 pt-2">
          <p>{description.slice(0, 350)}...</p>
        </div>
        <div className=" flex justify-between border-gray-300 border-t-2 pt-4">
          <div className="flex justify-center items-center">
            <h1>{author}</h1>
          </div>
          <div>
            <button
              className="px-4 py-2 bg-black text-white rounded-md"
              onClick={() => setToggle(!toggle)}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
