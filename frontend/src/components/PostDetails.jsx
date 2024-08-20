import gl from "../assets/gl.jpg";

const PostDetails = ({ setToggle, fullDetail }) => {
  const { title, description, author } = fullDetail;

  return (
    <div>
      <div className="fixed inset-0 bg-black/90"></div>
      <div className="flex lg:w-[60%] md:w-[60%] flex-col mx-auto bg-white rounded-lg relative">
        <button
          className="absolute text-black flex justify-end w-full p-3"
          onClick={() => setToggle(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="text-4xl font-semibold p-10">
          <h1>{title}</h1>
        </div>
        <div className="flex justify-center px-10 ">
          <img src={gl} className="rounded-lg" />
        </div>
        <div className="p-10 pt-0">
          <div className="py-4 text-lg font-medium">
            <p>Author: {author}</p>
          </div>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
