/* eslint-disable react/prop-types */
import gl from "../assets/gl.jpg";

const PostList = ({ toggle, setToggle, details, setReadmore }) => {
  const { title, description } = details;
  const handleDelete = async () => {
    const Delete = await fetch(`http://localhost:3000/posts/${details._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    console.log(Delete);
  };

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
          <p>{description.slice(0, 250)}...</p>
        </div>
        <div className=" flex justify-between border-gray-300 border-t-2 pt-4">
          {window.location.href.toString().includes("myposts") && (
            <div className="flex justify-between w-[50%] items-center">
              <button
                className="px-4 py-2 bg-black text-white rounded-md"
                onClick={() => {
                  console.log("Implement edit function");
                }}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 bg-black text-white rounded-md"
                onClick={() => handleDelete()}
              >
                Delete
              </button>
            </div>
          )}
          <div>
            <button
              className="px-4 py-2 bg-black text-white rounded-md"
              onClick={() => {
                setReadmore(details);
                setToggle(!toggle);
              }}
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
