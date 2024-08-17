import { useState } from "react";

const PostForm = () => {
  const [data, setData] = useState(
    {
      Title: String,
      Description: String,
      Author: String,
    },
  );


  return (
    <div className="w-[60%] mx-auto">
      <div className="font-semibold text-4xl flex justify-center pt-10">
        <h1>NEW POST</h1>
      </div>
      <form className="flex gap-10 w-full py-10">
        <div className="flex flex-col gap-2 font-semibold text-lg w-full">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="bg-slate-200 py-2 rounded-md pl-2 outline-none"
            onChange={(event) =>{
              setData((prev)=>({...prev,[event.target.name]:event.target.value}))
              console.log(data)}
            }
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows="4"
            className="bg-slate-200 w-full p-2 text-lg outline-none h-[350px] resize-none rounded-md "
            onChange={(event) =>{
              setData((prev)=>({...prev,[event.target.name]:event.target.value}))
              console.log(data)}
            }
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            onChange={(event) =>{
              setData((prev)=>({...prev,[event.target.name]:event.target.value}))
              console.log(data)}
            }
            className="bg-slate-200 py-2 rounded-md pl-2 outline-none"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-lg">Upload Image</div>
          <label
            htmlFor="UploadFile"
            className="flex items-center flex-col bg-slate-200 p-10 rounded-md cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-11 mb-2 fill-gray-500"
              viewBox="0 0 32 32"
            >
              <path
                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                data-original="#000000"
              />
              <path
                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                data-original="#000000"
               />
            </svg>
            Upload Image
            <input id="UploadFile" type="file" className="hidden" />
            <p className="text-xs font-medium text-gray-400 mt-2">
              PNG, JPG SVG, WEBP, and GIF are Allowed.
            </p>
          </label>
          <button className="bg-black text-md rounded-md text-white font-semibold w-full py-2">
            POST
          </button>
        </div>
      </form>
    </div>
  );
};


export default PostForm;
