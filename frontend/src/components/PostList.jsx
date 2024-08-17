import gl from "../assets/gl.jpg";

const PostList = () => {
  return (
    <div className="w-1/4 border-gray-100 border-2 shadow-lg rounded-lg cursor-pointer">
      <div className="p-2">
        <img src={gl} className="rounded-md" />
      </div>
      <div className="px-4">
        <div className="py-4 font-semibold text-2xl">
          <h1>HELLO WORLD</h1>
        </div>
        <div className="py-2">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
            repellat quae, iusto blanditiis animi reprehenderit? Sunt illum
            aspernatur voluptate ipsa quae rem quaerat molestias minus
            recusandae nesciunt, id quia omnis sequi dicta culpa facilis modi
            quo veniam voluptas error officiis?
          </p>
        </div>
        <div className=" flex justify-between border-gray-300 border-t-2 py-2">
          <div className="flex justify-center items-center">
            <h1>Athesh A</h1>
          </div>
          <div>
            <button className="px-4 py-2 bg-black text-white rounded-md">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
