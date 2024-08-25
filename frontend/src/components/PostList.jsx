import { useState } from "react";
import gl from "../assets/gl.jpg";

const PostList = ({ toggle, setToggle, details, setReadmore }) => {
  const { title, description } = details;
  const [data, setData] = useState({
    title: title || "",
    description: description || "",
  });
  const [error, setError] = useState({
    title: data.title.length < 5,
    description: data.description.length < 150,
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    const Delete = await fetch(`http://localhost:3000/posts/${details._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const handleUpdate = async () => {
    const update = await fetch(`http://localhost:3000/posts/${details._id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    setIsEditing(false);
  };
  console.log(data);
  return (
    <div className="w-full border-grey-300 border-2 shadow-lg rounded-lg p-6">
      <div>
        <img src={gl} className="rounded-md" />
      </div>
      {isEditing ? (
        <div className="pt-4">
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
                setData((prev) => ({
                  ...prev,
                  [event.target.name]: event.target.value,
                }));
                if (event.target.value.length >= 5) {
                  setError((prev) => ({ ...prev, title: false }));
                } else {
                  setError((prev) => ({ ...prev, title: true }));
                }
              }}
            />
            <label htmlFor="description">Description</label>
            <textarea
              required
              name="description"
              rows="4"
              className={`bg-slate-200 w-full p-2 text-lg outline-none h-[150px] resize-none rounded-md ${
                error.description ? "border-2 border-red-500" : ""
              }`}
              value={data.description}
              onChange={(event) => {
                setData((prev) => ({
                  ...prev,
                  [event.target.name]: event.target.value,
                }));
                if (event.target.value.length >= 150) {
                  setError((prev) => ({ ...prev, description: false }));
                } else {
                  setError((prev) => ({ ...prev, description: true }));
                }
              }}
            />
          </div>
          <div className="flex justify-between border-gray-300 border-t-2 pt-4">
            <button
              className="px-4 py-2 bg-red-600 text-white rounded-md"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
            <button
              className={`px-4 py-2 bg-black text-white rounded-md ${
                error.title || error.description ? "opacity-50" : ""
              }`}
              onClick={handleUpdate}
              disabled={error.title || error.description}
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="pt-4 font-semibold text-2xl">
            <h1>{title}</h1>
          </div>
          <div className="pb-4 pt-2">
            <p>{description.slice(0, 250)}...</p>
          </div>
          <div className="flex justify-between border-gray-300 border-t-2 pt-4">
            {window.location.href.toString().includes("myposts") && (
              <div className="flex justify-between w-[50%] items-center">
                <button
                  className="px-4 py-2 bg-black text-white rounded-md"
                  onClick={() => setIsEditing(true)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1464 1.14645C12.3417 0.951184 12.6583 0.951184 12.8535 1.14645L14.8535 3.14645C15.0488 3.34171 15.0488 3.65829 14.8535 3.85355L10.9109 7.79618C10.8349 7.87218 10.7471 7.93543 10.651 7.9835L6.72359 9.94721C6.53109 10.0435 6.29861 10.0057 6.14643 9.85355C5.99425 9.70137 5.95652 9.46889 6.05277 9.27639L8.01648 5.34897C8.06455 5.25283 8.1278 5.16507 8.2038 5.08907L12.1464 1.14645ZM12.5 2.20711L8.91091 5.79618L7.87266 7.87267L8.12731 8.12732L10.2038 7.08907L13.7929 3.5L12.5 2.20711ZM9.99998 2L8.99998 3H4.9C4.47171 3 4.18056 3.00039 3.95552 3.01877C3.73631 3.03668 3.62421 3.06915 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3.06915 3.62421 3.03669 3.73631 3.01878 3.95552C3.00039 4.18056 3 4.47171 3 4.9V11.1C3 11.5283 3.00039 11.8194 3.01878 12.0445C3.03669 12.2637 3.06915 12.3758 3.10899 12.454C3.20487 12.6422 3.35785 12.7951 3.54601 12.891C3.62421 12.9309 3.73631 12.9633 3.95552 12.9812C4.18056 12.9996 4.47171 13 4.9 13H11.1C11.5283 13 11.8194 12.9996 12.0445 12.9812C12.2637 12.9633 12.3758 12.9309 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C12.9309 12.3758 12.9633 12.2637 12.9812 12.0445C12.9996 11.8194 13 11.5283 13 11.1V6.99998L14 5.99998V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H4.9H4.87934C4.47686 14 4.14468 14 3.87409 13.9779C3.59304 13.9549 3.33469 13.9057 3.09202 13.782C2.7157 13.5903 2.40973 13.2843 2.21799 12.908C2.09434 12.6653 2.04506 12.407 2.0221 12.1259C1.99999 11.8553 1.99999 11.5231 2 11.1207V11.1206V11.1V4.9V4.87935V4.87932V4.87931C1.99999 4.47685 1.99999 4.14468 2.0221 3.87409C2.04506 3.59304 2.09434 3.33469 2.21799 3.09202C2.40973 2.71569 2.7157 2.40973 3.09202 2.21799C3.33469 2.09434 3.59304 2.04506 3.87409 2.0221C4.14468 1.99999 4.47685 1.99999 4.87932 2H4.87935H4.9H9.99998Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-md"
                  onClick={handleDelete}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
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
      )}
    </div>
  );
};

export default PostList;
