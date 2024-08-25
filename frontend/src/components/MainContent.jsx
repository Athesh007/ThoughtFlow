import { useEffect, useState } from "react";
import PostList from "./PostList";
import PostDetails from "./PostDetails";

const MainContent = () => {
  const [toggle, setToggle] = useState(false);
  const [fullDetail, setFullDetail] = useState(null);
  const [readmore, setReadmore] = useState(null);

  useEffect(() => {
    const res = async () => {
      const myposts = await fetch(`http://localhost:3000/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      setFullDetail(myposts);
    };
    res();
  }, []);

  return (
    <div className="w-full min-h-screen">
      {toggle && (
        <div className="absolute">
          <PostDetails readmore={readmore} setToggle={setToggle} />
        </div>
      )}
      <div className="pb-20 lg:px-20 px-6 pt-10">
        <div className="font-semibold text-3xl pb-10">
          <p>BLOGS</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
          {fullDetail &&
            !window.location.href.toString().includes("myposts") &&
            fullDetail.map((detail, index) => (
              <PostList
                key={index}
                toggle={toggle}
                setReadmore={setReadmore}
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
