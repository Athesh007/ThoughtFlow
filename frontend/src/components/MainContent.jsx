import { useState } from "react";
import PostList from "./PostList";
import PostDetails from "./PostDetails";

const MainContent = ({ details }) => {
  const [toggle, setToggle] = useState(false);
  const [fullDetail, setFullDetail] = useState(null);

  return (
    <div className=" w-full min-h-screen">
      {toggle && (
        <div className="absolute">
          <PostDetails fullDetail={fullDetail} setToggle={setToggle} />
        </div>
      )}
      <div className="pb-20 px-20 pt-10">
        <div className="font-semibold text-3xl pb-10">
          <p>BLOGS</p>
        </div>
        <div className="grid grid-cols-3 gap-10 w-full">
          {details.map((detail) => (
            <PostList
              toggle={toggle}
              setFullDetail={setFullDetail}
              setToggle={setToggle}
              details={detail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
