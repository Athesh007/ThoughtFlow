import { useState } from "react";
import PostList from "./PostList";
import PostDetails from "./PostDetails";

const MainContent = ({ details }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" w-full min-h-screen">
      {toggle && (
        <div className="absolute">
          <PostDetails details={details} setToggle={setToggle} />
        </div>
      )}
      <div className="pb-20 px-20 pt-10">
        <div className="font-semibold text-3xl pb-10">
          <p>BLOGS</p>
        </div>
        <div className="grid grid-cols-3 gap-10 w-full">
          {details.map(() => (
            <PostList toggle={toggle} setToggle={setToggle} details={details} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
