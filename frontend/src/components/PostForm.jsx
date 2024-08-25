import { useState } from "react";

const PostForm = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const [error, setError] = useState({
    title: true,
    description: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!error.title && !error.description) {
      data.id = localStorage.getItem("user");
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    }
  };

  return (
    <div className="lg:w-[60%] sm:w-[60%] md:w-[60%] mx-auto">
      <div className="font-semibold text-4xl flex justify-center pt-10">
        <h1>NEW POST</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 w-full py-10"
      >
        <div className="flex flex-col gap-2 font-semibold text-lg w-full">
          <label htmlFor="title">Title</label>
          <input
            required
            type="text"
            name="title"
            className={`bg-slate-200 py-2 rounded-md pl-2 outline-none ${
              data.title.length === 0
                ? "border-none"
                : error.title
                ? "border-2 border-red-500"
                : "border-none"
            }`}
            value={data.title}
            onChange={(event) => {
              const title = event.target.value;
              setData((prev) => ({
                ...prev,
                title,
              }));
              setError((prev) => ({
                ...prev,
                title: title.length < 5,
              }));
            }}
          />
          {error.title && data.title.length > 0 && (
            <p className="text-red-500">
              Title must be at least 5 characters long.
            </p>
          )}
          <label htmlFor="description">Description</label>
          <textarea
            required
            name="description"
            rows="4"
            className={`bg-slate-200 w-full p-2 text-lg outline-none h-[350px] resize-none rounded-md ${
              data.description.length === 0
                ? "border-none"
                : error.description
                ? "border-2 border-red-500"
                : "border-none"
            }`}
            value={data.description}
            onChange={(event) => {
              const description = event.target.value;
              setData((prev) => ({
                ...prev,
                description,
              }));
              setError((prev) => ({
                ...prev,
                description: description.length < 150,
              }));
            }}
          />
          {error.description && data.description.length > 0 && (
            <p className="text-red-500">
              Description must be at least 150 characters long.
            </p>
          )}
        </div>

        <button
          type="submit"
          className={`bg-black text-md rounded-md text-white font-semibold w-full py-2 ${
            error.title || error.description
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={error.title || error.description}
        >
          POST
        </button>
      </form>
    </div>
  );
};

export default PostForm;
